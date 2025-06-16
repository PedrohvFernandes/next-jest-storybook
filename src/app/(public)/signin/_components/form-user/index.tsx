"use client"

import { Button } from "@/components/button";
import { Text } from "@/components/text";
import { TextInput } from "@/components/text-input";
import { useLoginUser } from "@/hooks/use-login-user";
import { cn } from "@/utils/cn";
import { User } from "phosphor-react";


interface FormUserProps {
  className?: string
}

export function FormUser({ className }: FormUserProps) {

  const { handleSubmit, login, register, errors } = useLoginUser()

  const hasErrors = {
    name: errors.name?.message
  }

  const errorFlags = {
    name: !!hasErrors.name
  }

  return (
    <form onSubmit={handleSubmit(login)} className={cn("flex flex-col items-stretch w-full max-w-sm gap-4", className)}>

      <label htmlFor="Email" className="flex flex-col gap-3">
        <Text className="font-semibold">Seu nome</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <User />
          </TextInput.Icon>

          <TextInput.Input
            placeholder="Digite seu nome"
            id="Name"
            type='text'
            {...register('name')}
          />
        </TextInput.Root>
        <TextInput.Error>
          {hasErrors.name}
        </TextInput.Error>
      </label>

      <Button type="submit" className="mt-4" disabled={errorFlags.name}>
        Entrar na plataforma
      </Button>
    </form>
  )
}