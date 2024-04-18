'use client'
import { Banner } from '@/components/banner'
import Brackets from '@/components/brackets'
import Devider from '@/components/devider'
export default function Home() {
  return (
    <div className="m-auto mt-5 h-screen w-4/5 bg-background">
      <Banner />
      <Devider text="Fases" />
      <Brackets />
      <Devider text="PRÓXIMAS PARTIDAS" />
    </div>
  )
}
