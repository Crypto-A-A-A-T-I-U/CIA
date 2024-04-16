'use client'

import { useAuthentication } from '@/hooks/use-authentication'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AdminPage() {
  const auth = useAuthentication()
  const router = useRouter()

  useEffect(() => {
    if (auth.isAuthenticated === false) {
      router.replace('/admin/login')
    }
  }, [])

  return (
    <div>
      <h1>Admin page</h1>
    </div>
  )
}
