import { useContext } from "react";
import { ToastContext } from "./toastContext";

export default function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a AuthProvider");
  }
  return context;
}
