import IUser from "../interfaces/user";
import api from "./api";

export async function getUsers(): Promise<IUser[]> {
  const users = await api("/users", "GET");
  return users;
}

export async function getUser(id: number): Promise<IUser> {
  const user = await api(`/users/${id}`, "GET");
  return user;
}

export async function updateUserRole(
  id: number,
  roleId: number
): Promise<IUser> {
  const user = await api(`/users/${id}`, "PUT", { roleId });
  return user;
}
