type State = {
  toasts: {
    id: number;
    message: string;
    type: "success" | "error";
  }[];
};

type AddToastAction = {
  type: "ADD_TOAST";
  payload: {
    id: number;
    message: string;
    type: "success" | "error";
  };
};

type DeleteToastAction = {
  type: "DELETE_TOAST";
  payload: number;
};

type ActionType = AddToastAction | DeleteToastAction;

export const toastReducer = (state: State, action: ActionType): State => {
  let updatedToasts: State["toasts"];
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case "DELETE_TOAST":
      updatedToasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
      return {
        ...state,
        toasts: updatedToasts,
      };
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};
