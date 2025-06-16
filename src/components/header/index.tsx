'use client'

import { ReactNode } from 'react'

import { Button } from '../../components/button'
import { useUser } from '@/hooks/get-user'
import { useRouter, usePathname } from 'next/navigation' // Use apenas App Router
import { ConfigRoutes } from '@/config'
import { Heading } from '../heading'
import { Text } from '../text'
import { useLoginUser } from '@/hooks/use-login-user'

export interface HeaderProps {
  children?: ReactNode
}

export const Header: React.FC<HeaderProps> = () => {
  const { user } = useUser()
  const { logout } = useLoginUser()

  const router = useRouter()
  const pathname = usePathname()

  return (
    <header className="fixed w-full">
      <div className="flex justify-between items-center border-b border-white/10 py-4 px-5 bg-gray-900">
        <div className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-top"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                fill="var(--background)"
              />
              <path
                d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                fill="var(--primary-default)"
              />
              <path
                d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                fill="var(--tertiary-default)"
              />
            </g>
          </svg>
          <Heading asChild>
            <h1>C6 Bank</h1>
          </Heading>
        </div>
        <div className="flex items-center">
          {user ? (
            <>
              <Text className="mr-2">
                Welcome, <b>{user.name}</b>!
              </Text>
              <Button size="small" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                size="small"
                onClick={() => router.push(ConfigRoutes.testC6bank.signin.path)}
                active={pathname === ConfigRoutes.testC6bank.signin.path}
              >
                Log in
              </Button>
              <Button
                primary
                size="small"
                onClick={() => router.push(ConfigRoutes.testC6bank.signup.path)}
                className="ml-2"
                active={pathname === ConfigRoutes.testC6bank.signup.path}
              >
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
