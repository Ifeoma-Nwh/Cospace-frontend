import ICity from "../interfaces/City/city";
import ICreateCity from "../interfaces/City/createCity";
import IUpdateCity from "../interfaces/City/updateCity";
import api from "./api";

export async function getCities(): Promise<ICity[]> {
  const cities = await api("/cities", "GET");
  return cities;
}

export async function getCity(id: number): Promise<ICity> {
  const city = await api(`/cities/${id}`, "GET");
  return city;
}

export async function createCity(city: ICreateCity): Promise<ICity> {
  const createdCity = await api("/cities", "POST", city);
  return createdCity;
}

export async function updateCity(city: IUpdateCity): Promise<ICity> {
  const updatedCity = await api(`/cities/${city.id}`, "PUT", city);
  return updatedCity;
}

export async function deleteCity(id: number): Promise<string> {
  await api(`/cities/${id}`, "DELETE");
  return "deleted city successfully";
}
