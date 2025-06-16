import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginUserPdmPropsZod, loginUserPdmSchema } from '../types/user'
import { removeToken, setToken } from '@/utils/auth'
import { useRouter } from 'next/navigation'
import { ConfigRoutes } from '@/config'
import { useUser } from './get-user'

export const useLoginUser = () => {
  const router = useRouter()
  const { setUser } = useUser()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginUserPdmPropsZod>({
    mode: 'all',
    resolver: zodResolver(loginUserPdmSchema),
  })


  const login = async (data: LoginUserPdmPropsZod) => {

    // Aqui faria uma req

    // Claramente que apos a req viriamos se deu algum erro na response, e apos tudo vir corretamente, viria um token e a gente passaria para o setToken e la no contexto a gente o pegaria e o  decodificaria...
    setToken(data.name, 1 / 6) // expires em 4 hours = 1/6 days

    // Aqui a gente tambem decodificaria o token e passaria as informações
    setUser({
      name: data.name
    })

    reset()
    router.push(ConfigRoutes.testC6bank.default.path)
  }


  function logout() {
    setUser(null)
    removeToken()
    router.push(ConfigRoutes.testC6bank.signin.path)
  }


  return {
    login,
    logout,
    register,
    handleSubmit,
    errors
  }
}
