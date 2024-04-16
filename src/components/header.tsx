'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import Link from 'next/link'
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer'
import { MenuIcon } from 'lucide-react'

export function Header() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  return (
    <header>
      <nav className="border-brand bg-dark flex h-[9vh] items-center justify-between border-b-8 px-10 md:px-24">
        <span className="text-slate-100">LOGO</span>
        {isDesktop ? (
          <ul className="text-brand hidden gap-x-10 md:flex">
            <li>
              <Link
                href="/"
                className="transition-opacity duration-300 hover:opacity-90"
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                href="/atleticas"
                className="transition-opacity duration-300 hover:opacity-90"
              >
                ATLÉTICAS
              </Link>
            </li>
            <li>
              <Link
                href="/partidas"
                className="transition-opacity duration-300 hover:opacity-90"
              >
                PRÓXIMAS PARTIDAS
              </Link>
            </li>
            <li>
              <Link
                href="/resultados"
                className="transition-opacity duration-300 hover:opacity-90"
              >
                RESULTADOS
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="transition-opacity duration-300 hover:opacity-90"
              >
                FAQ
              </Link>
            </li>
          </ul>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon className="text-brand" />
            </DrawerTrigger>
            <DrawerContent>
              <ul className="text-brand flex flex-col gap-y-10 p-10">
                <li>
                  <Link
                    href="/"
                    className="transition-opacity duration-300 hover:opacity-90"
                  >
                    INICIO
                  </Link>
                </li>
                <li>
                  <Link
                    href="/atleticas"
                    className="transition-opacity duration-300 hover:opacity-90"
                  >
                    ATLÉTICAS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partidas"
                    className="transition-opacity duration-300 hover:opacity-90"
                  >
                    PRÓXIMAS PARTIDAS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resultados"
                    className="transition-opacity duration-300 hover:opacity-90"
                  >
                    RESULTADOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-opacity duration-300 hover:opacity-90"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </DrawerContent>
          </Drawer>
        )}
      </nav>
    </header>
  )
}
