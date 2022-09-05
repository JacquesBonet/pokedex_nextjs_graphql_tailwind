import type { FC } from 'react'

import { PokemonTypeColor } from '@/utils/colors'

export interface ICardProps {
   children: any
   type: string
}

export const Card: FC<ICardProps> = ({ children, type }) => (
   <div
      className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
      style={{
         background: `linear-gradient(0deg, #fafafa, ${PokemonTypeColor[type]?.light})`,
      }}
   >
      {children}
   </div>
)
