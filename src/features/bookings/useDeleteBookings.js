import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking } from '../../services/apiBookings';

export function useDeleteBookings() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTheBooking } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking deleted Successfully`);
      queryClient.invalidateQueries({
        queryKey: ['bookings'],
      });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteTheBooking };
}
