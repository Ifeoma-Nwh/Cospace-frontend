import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCowork,
  deleteCowork,
  getCowork,
  getCoworks,
  updateCowork,
} from "../api/coworks";
import IUpdateCowork from "../interfaces/Cowork/updateCowork";
import ICreateCowork from "../interfaces/Cowork/createCowork";

export const useGetCoworks = () => {
  return useQuery({ queryKey: ["coworks"], queryFn: getCoworks });
};

export const useGetCowork = (id: number) => {
  return useQuery({ queryKey: ["cowork", id], queryFn: () => getCowork(id) });
};

export const useCreateCowork = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cowork: ICreateCowork) => createCowork(cowork),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["coworks"] }),
    onError: (error) => {
      console.error("Error creating cowork:", error);
    },
  });
};

export const useUpdateCowork = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cowork: IUpdateCowork) => updateCowork(cowork),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["coworks"] });
      queryClient.invalidateQueries({ queryKey: ["cowork", variables.id] });
    },
    onError: (error) => {
      console.error("Error updating cowork:", error);
    },
  });
};

export const useDeleteCowork = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteCowork(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["coworks"] }),
    onError: (error) => {
      console.error("Error deleting cowork:", error);
    },
  });
};
