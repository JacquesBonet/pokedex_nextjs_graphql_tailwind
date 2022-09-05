import { ReactNode } from 'react'

import { Navbar } from "@/components/Navbar";

export interface ILayoutProps {
  children: ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mt-14 flex h-full w-full flex-col">{children}</main>
    </>
  )
}

