'use client'

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/get-user";
import { ConfigRoutes } from '@/config'

export default function NotFound() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-400 mb-8 text-center">
        Opa! Parece que essa página não existe ou foi removida.
      </p>

      <div className="flex gap-4">
        <Button onClick={() => router.back()}>Voltar para a última tela</Button>
        <Button onClick={() => router.push(user ? ConfigRoutes.testC6bank.default.path : ConfigRoutes.testC6bank.signin.path)}>
          Ir para a {user ? "Home" : "Login"}
        </Button>
      </div>
    </div>
  );
}
