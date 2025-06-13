"use client"

import React from "react";

import { Header } from "./header-default";
import { useUser } from "@/hooks/get-user";

export const HeaderLogin: React.FC = () => {
  const { user, login, logout } = useUser()

  return (
    <Header
      user={user}
      onLogin={login}
      onLogout={logout}
      onCreateAccount={login}
    />
  )
}