import {
  createContext,
  FC,
  ReactElement,
  ReactNode,
  useContext,
  useReducer,
} from "react";

const initialValue: IAuthContextValue = {
  username: "",
  accessToken: "",
};

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContextValue {
  username: string;
  accessToken: string;
}

interface IAuthContextProvider {
  auth: IAuthContextValue;
  set: (username: string, accessToken: string) => void;
  clear: () => void;
}

const AuthContext = createContext<IAuthContextProvider>({
  auth: initialValue,
  set: () => {},
  clear: () => {},
});

const reducer = (
  state: IAuthContextValue,
  action: { type: string; value?: IAuthContextValue }
): IAuthContextValue => {
  switch (action.type) {
    case "set":
      return {
        username: action.value?.username || "",
        accessToken: action.value?.accessToken || "",
      };
    case "clear":
      return initialValue;
    default:
      return state;
  }
};

export const AuthProvider: FC<IAuthProviderProps> = ({
  children,
}): ReactElement => {
  const [auth, authDispatch] = useReducer(reducer, initialValue);

  const handleSet = (username: string, accessToken: string) => {
    authDispatch({
      type: "set",
      value: {
        username,
        accessToken,
      },
    });
  };

  const handleClear = () => {
    authDispatch({
      type: "clear",
    });
  };

  const contextValue = {
    auth,
    handleClear,
    handleSet,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
