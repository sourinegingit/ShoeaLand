// src/components/context/Auth.context.tsx
import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { clearAuth, setAuth } from '../store/authSlice';


interface IAuthContext {
  username: string;
  accessToken: string;
  setAuth: (username: string, accessToken: string) => void;
  clearAuth: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);

  const handleSetAuth = (username: string, accessToken: string) => {
    dispatch(setAuth({ username, accessToken }));
  };

  const handleClearAuth = () => {
    dispatch(clearAuth());
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuth: handleSetAuth, clearAuth: handleClearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
