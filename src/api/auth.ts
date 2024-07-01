import { IAuthAccessToken, ILogoutResponse } from "../interfaces/auth";
import IUser from "../interfaces/user";
import api from "./api";

export async function register(data: {
  fullName: string;
  email: string;
  password: string;
}): Promise<IAuthAccessToken> {
  const registeredUser = await api("/auth/register", "POST", data);

  return registeredUser;
}

export async function login(data: {
  email: string;
  password: string;
}): Promise<IAuthAccessToken> {
  const loggedUser = await api("/auth/login", "POST", data);
  return loggedUser;
}

export async function logout(): Promise<ILogoutResponse> {
  const response = await api("/auth/logout", "DELETE");
  return response;
}

export async function getMe(): Promise<IUser | null> {
  const authData = await api("/auth/me", "GET");
  console.log("🚀 ~ getMe ~ authData:", authData);
  return authData?.authUser || null;
}
