import { createContext } from "react";

interface ToastContextValue {
  success: (message: string) => void;
  error: (message: string) => void;
  remove: (id: number) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
