import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin } from '../../services/apiCabins';

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTheCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: (data) => {
      toast.success(`Cabin ${data.id} deleted Successfully`);
      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteTheCabin };
}
