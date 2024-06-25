import { createContext } from "react";
import { useGetMe } from "../../hooks/useAuth";
import IUser from "../../interfaces/user";

export const AuthContext = createContext<IUser | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const { data: authUser = null, isLoading, error } = useGetMe();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <AuthContext.Provider value={authUser}>{children}</AuthContext.Provider>
  );
}
