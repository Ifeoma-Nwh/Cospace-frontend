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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (error) => {
      console.error("Error creating city:", error);
    },
  });
};

export const useUpdateCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedCity: IUpdateCity) => updateCity(updatedCity),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.invalidateQueries({ queryKey: ["city", variables.id] });
    },
    onError: (error) => {
      console.error("Error updating city:", error);
    },
  });
};

export const useDeleteCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteCity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (error) => {
      console.error("Error deleting city:", error);
    },
  });
};
