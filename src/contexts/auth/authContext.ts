import { createContext } from "react";
import IUser from "../../interfaces/user";

export type AuthState = {
  authUser: IUser | null;
};

export type AuthAction = {
  type: string;
  payload: IUser | null;
};

export type AuthDispatch = (action: AuthAction) => void;

export const AuthContext = createContext<
  { state: AuthState; dispatch: AuthDispatch } | null | undefined
>(null);
