import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // filter data
  const filterValue = searchParams.get('status');
  const filter =
    !filterValue || filterValue === 'all'
      ? null
      : {
          field: 'status',
          value: filterValue,
        };

  // sort data
  const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
  const [field, direction] = sortByRaw.split('-');
  const sortBy = { field, direction };

  // pagination
  let page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  //React Query
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function preFetchData(dataToFetch) {
    if (dataToFetch === 'next' ? page < pageCount : page > 1)
      queryClient.prefetchQuery({
        queryKey: [
          'bookings',
          filter,
          sortBy,
          dataToFetch === 'next' ? page + 1 : page - 1,
        ],
        queryFn: () =>
          getBookings({
            filter,
            sortBy,
            page: dataToFetch === 'next' ? page + 1 : page - 1,
          }),
      });
  }

  preFetchData('next');
  preFetchData('prev');

  return { isLoading, bookings, error, count };
}
