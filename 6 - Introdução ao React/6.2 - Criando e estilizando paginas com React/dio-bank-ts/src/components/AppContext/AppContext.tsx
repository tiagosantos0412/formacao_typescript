import { createContext, Dispatch, SetStateAction } from "react";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setUserData: Dispatch<SetStateAction<IAppContext>>;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const user = 'Tiago';
  const isLoggedIn = false;

  const setUserData: IAppContext["setUserData"] = (userData) => {
    // Implemente a lógica para atualizar o estado do contexto aqui
    console.log("Atualizando contexto com:", userData);
  };

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
