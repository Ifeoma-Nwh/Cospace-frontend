import { useEffect, useReducer } from "react";
import { useGetMe } from "../../hooks/useAuth";
import { AuthContext, type AuthAction, type AuthState } from "./authContext";

const initialState: AuthState = {
  authUser: null,
};

const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        authUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        authUser: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const query = useGetMe();
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    if (query.isSuccess && query.data) {
      dispatch({ type: "SET_USER", payload: query.data });
    }
    if (query.isSuccess && !query.data) {
      dispatch({ type: "LOGOUT", payload: null });
    }

    if (query.isError) {
      dispatch({ type: "LOGOUT", payload: null });
    }
  }, [query.data, query.isSuccess, query.isError]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
