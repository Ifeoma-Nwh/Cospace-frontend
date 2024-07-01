import { useMutation, useQuery } from "@tanstack/react-query";
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
  return useMutation({
    mutationFn: async () => await logout(),
    onSuccess: () => {
      localStorage.removeItem("token");
    },
  });
};

export const useGetMe = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: () => getMe(),
    retry: 1,
    staleTime: Infinity,
    enabled: !!localStorage.getItem("token"),
  });
};
