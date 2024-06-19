import ICowork from "../interfaces/cowork";
import api from "./api";

export async function getCoworks(): Promise<ICowork[]> {
  const coworks = await api("/coworks", "GET");
  return coworks;
}

export async function getCowork(id: string): Promise<ICowork> {
  const cowork = await api(`/coworks/${id}`, "GET");
  return cowork;
}

export async function createCowork(cowork: ICowork): Promise<ICowork> {
  const createdCowork = await api("/coworks", "POST", cowork);
  return createdCowork;
}

export async function updateCowork(cowork: ICowork): Promise<ICowork> {
  const updatedCowork = await api(`/coworks/${cowork.id}`, "PUT", cowork);
  return updatedCowork;
}

export async function deleteCowork(id: number): Promise<string> {
  await api(`/coworks/${id}`, "DELETE");
  return "Cowork deleted successfully";
}
