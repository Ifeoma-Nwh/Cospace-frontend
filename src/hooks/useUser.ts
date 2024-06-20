import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, getUsers, updateUserRole } from "../api/users";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};

export const useGetUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
  });
};

export const useUpdateUserRole = (id: number, roleId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => updateUserRole(id, roleId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
