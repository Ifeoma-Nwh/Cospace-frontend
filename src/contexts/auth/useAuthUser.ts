import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function useAuthUser() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
