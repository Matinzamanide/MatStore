import React, { createContext, useContext, useState } from "react";

interface IAuthContext {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IAuthContextProvider {
  children: React.ReactNode;
}
export const authContext = createContext({} as IAuthContext);
export function useAuthContext() {
  return useContext(authContext);
}
export const AuthContextProvider: React.FC<IAuthContextProvider> = ({
  children,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <authContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </authContext.Provider>
  );
};
