import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCity,
  deleteCity,
  getCities,
  getCity,
  updateCity,
} from "../api/cities";
import ICreateCity from "../interfaces/City/createCity";
import IUpdateCity from "../interfaces/City/updateCity";

export const useGetCities = () => {
  return useQuery({ queryKey: ["cities"], queryFn: getCities });
};

export const useGetCity = (id: number) => {
  return useQuery({ queryKey: ["city", id], queryFn: () => getCity(id) });
};

export const useCreateCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCity: ICreateCity) => createCity(newCity),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
};

export const useUpdateCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedCity: IUpdateCity) => updateCity(updatedCity),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
};

export const useDeleteCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteCity(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
};
