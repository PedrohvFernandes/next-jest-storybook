import { z } from 'zod'

const loginUserPdmSchema = z.object({
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
})

type LoginUserPdmPropsZod = z.infer<typeof loginUserPdmSchema>

export { loginUserPdmSchema }

export type { LoginUserPdmPropsZod }
