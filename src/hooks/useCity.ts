import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createCity,
  deleteCity,
  getCities,
  getCity,
  updateCity,
} from "../api/cities";
import ICity from "../interfaces/city";

export const useGetCities = () => {
  return useQuery({ queryKey: ["cities"], queryFn: getCities });
};

export const useGetCity = (id: number) => {
  return useQuery({ queryKey: ["city", id], queryFn: () => getCity(id) });
};

export const useCreateCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newCity: ICity) => createCity(newCity),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
  });
};

export const useUpdateCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedCity: ICity) => updateCity(updatedCity),
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
