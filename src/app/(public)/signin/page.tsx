import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { Bar } from '@/styles/bar'
import { FormUser } from './_components/form-user'

export default function Signin() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <Heading size="lg" className="mt-4 flex items-center gap-1">
          Teste <Bar /> <span className="text-tertiary-default">C6 Bank</span>
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <FormUser />
    </div>
  )
}
