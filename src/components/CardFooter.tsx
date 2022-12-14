import { FC } from 'react'

import { PokemonTypeColor } from '@/utils/colors'

export interface ICardFooterProps {
   name: string
   types: string[]
}

export const CardFooter: FC<ICardFooterProps> = ({ name, types }) => (
   <div className="flex w-full flex-1 flex-col items-center justify-evenly ">
      <h3 className="text-2xl font-bold capitalize tracking-wide text-secondary">{name}</h3>

      <div className="flex w-full flex-row items-center justify-center gap-4">
         {types.map((typeName: string) => (
            <div
               key={typeName}
               style={{
                  backgroundColor: PokemonTypeColor[typeName]?.medium,
               }}
               className="rounded-md px-2 py-1"
            >
               <p className="text-xs font-semibold tracking-wide text-primary">{typeName.toUpperCase()}</p>
            </div>
         ))}
      </div>
   </div>
)
