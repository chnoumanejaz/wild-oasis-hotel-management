import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success('User details updated successfully');
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: err => {
      toast.error(err.message);
    },
  });

  return { isUpdatingUser, updateUser };
}
