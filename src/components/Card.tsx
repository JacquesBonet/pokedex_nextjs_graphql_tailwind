import type { FC } from 'react'

import { CardFooter } from '@/components/CardFooter'
import { PokemonTypeColor } from '@/utils/colors'

export interface ICardProps {
   children?: any
   id?: string | number
   name: string
   types: string[]
}

export const Card: FC<ICardProps> = ({ children, id, name, types }) => (
   <div
      className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
      style={{
         background: `linear-gradient(0deg, #fafafa, ${
            PokemonTypeColor[types[0] || 'normal']?.light
         })`,
      }}
   >
      {children}
      {id && id}
      <CardFooter name={name} types={types} />
   </div>
)
