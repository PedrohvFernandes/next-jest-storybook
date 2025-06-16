'use client'

import { LoginUserPdmPropsZod } from '@/types/user'
import { getToken } from '@/utils/auth'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface IUserContextType {
  user: LoginUserPdmPropsZod | null // Permite também ser null no início
  setUser: React.Dispatch<React.SetStateAction<LoginUserPdmPropsZod | null>> // Tipo do setUser do useState
}

export const UserContext = createContext({} as IUserContextType)

interface IUserContextProvider {
  children: ReactNode
}

// Contexto responsável só para repassar as infos do usuário e setar momento inicial
export function UserContextProvider({ children }: IUserContextProvider) {
  const [user, setUser] = useState<LoginUserPdmPropsZod | null>(null)
  const isAuthenticated = !!getToken()

  useEffect(() => {
    // No primeiro login não temos o token, somente quando logamos e recarregamos a pagina
    if (!isAuthenticated) return

    // Simulando a "decodificação" do token
    // Aqui teria que decodificar o token, mas como não é realmente um token e sim o nome, então passamos direto o que vem do token para a propriedade name
    setUser({
      name: getToken() ?? '',
    })
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
