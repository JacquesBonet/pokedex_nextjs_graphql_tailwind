import { FC, ReactNode } from 'react'

import { Navbar } from '@/components/Navbar'

export interface ILayoutProps {
   children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
   <>
      <Navbar />
      <main className="mt-14 flex h-full w-full flex-col">{children}</main>
   </>
)
