import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe, login, logout, register } from "../api/auth";

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: { fullName: string; email: string; password: string }) =>
      register(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      localStorage.removeItem("token");
      queryClient.setQueryData(["authUser"], null);
    },
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: () => getMe(),
    staleTime: Infinity,
    enabled: !!localStorage.getItem("token"),
  });
};
