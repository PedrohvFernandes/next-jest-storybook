import { useContext } from 'react'
import { UserContext } from '@/contexts/user-context'

export function useUser() {
  const context = useContext(UserContext)
  return context
}
