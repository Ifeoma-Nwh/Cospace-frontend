import { useReducer } from "react";
import { toastReducer } from "../../reducers/toastReducer";
import { initialState } from "./toastConstants";
import ToastsContainer from "../../components/toast/ToastsContainer";
import { ToastContext } from "./toastContext";

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const [state, dispatch] = useReducer(toastReducer, initialState);

  const addToast = (type: "success" | "error", message: string) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch({ type: "ADD_TOAST", payload: { id, message, type } });
  };
  const remove = (id: number) => {
    dispatch({ type: "DELETE_TOAST", payload: id });
  };

  const success = (message: string) => {
    addToast("success", message);
  };

  const error = (message: string) => {
    addToast("error", message);
  };

  const value = { success, error, remove };

  return (
    <ToastContext.Provider value={value}>
      <ToastsContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  );
}
