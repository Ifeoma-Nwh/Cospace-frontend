import ICity from "../interfaces/city";
import api from "./api";

export async function getCities(): Promise<ICity[]> {
  const cities = await api("/cities", "GET");
  return cities;
}

export async function getCity(id: number): Promise<ICity> {
  const city = await api(`/cities/${id}`, "GET");
  return city;
}

export async function createCity(city: ICity): Promise<ICity> {
  const createdCity = await api("/cities", "POST", city);
  return createdCity;
}

export async function updateCity(city: ICity): Promise<ICity> {
  const updatedCity = await api(`/cities/${city.id}`, "PUT", city);
  return updatedCity;
}

export async function deleteCity(id: number): Promise<string> {
  await api(`/cities/${id}`, "DELETE");
  return "deleted city successfully";
}
