'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAuthentication } from '@/hooks/use-authentication'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const loginSchema = z.object({
  password: z.string(),
})

type LoginSchemaProps = z.infer<typeof loginSchema>

export default function LoginPage() {
  const auth = useAuthentication()
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<LoginSchemaProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
    },
  })

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.replace('/admin')
    }
  }, [auth.isAuthenticated, router])

  function handleAuthenticate({ password }: LoginSchemaProps) {
    if (password === process.env.ADMIN_PASSWORD) {
      auth.authenticate()
      toast({ title: 'Login realizado com sucesso!' })

      setInterval(() => router.replace('/admin'), 2000)
    } else {
      toast({
        title: 'Senha incorreta, tente novamente',
        variant: 'destructive',
      })
    }
  }

  return (
    <main className="flex h-[85vh] items-center justify-center">
      <Card className="h-[35vh] w-[85vw] md:w-[30vw]">
        <CardHeader className="text-2xl font-medium">
          <CardTitle>Painel de login</CardTitle>
          <CardDescription>
            Faça login para acessar a área administrativa da CIA.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex w-[100%] justify-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleAuthenticate)}
              className="w-[90%]"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Insira a senha de administrador."
                        className="p-5 transition-all duration-100 focus:border-brand"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="mt-10 flex w-full items-center justify-center p-4 md:mt-16">
                <Button className="w-[200%] bg-brand hover:bg-brand">
                  Entrar
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
}
