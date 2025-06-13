"use client"

import { User } from "@/types/user";
import { createContext, ReactNode, useEffect, useState } from "react";


interface IUserContextType {
  user: User | null; // Pode ser null se não estiver logado
  login: () => void;
  logout: () => void;
}

export const UserContext = createContext({} as IUserContextType);

interface IUserContextProvider {
  children: ReactNode;
}

const USER_STORAGE_KEY = 'user:login';

export function UserContextProvider({ children }: IUserContextProvider) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = window.localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  function login() {
    // Aqui teria uma requisição para o backend
    // Exemplo:
    // const response = await api.post('/login', { username, password });
    // setUser(response.data.user);

    // Como não há backend ainda, fiz uma simulação
    const fakeUser = { name: 'Jane Doe' };
    setUser(fakeUser);
  }

  function logout() {
    // Aqui poderia avisar o backend para invalidar o token ou sessão
    // Exemplo:
    // await api.post('/logout');

    setUser(null);
  }

  useEffect(() => {
    if (user) {
      window.localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(USER_STORAGE_KEY);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
