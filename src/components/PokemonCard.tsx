import Image from 'next/future/image'
import Link from 'next/link'
import { FC } from 'react'

import { Card } from "@/components/Card";
import { CardFooter } from "@/components/CardFooter";
import { ICardProps } from "@/types";
import { IMG_URL } from '@/utils/constants'

import getBackgroundColors from "@/utils/getBackgroundColors";
import { PokemonIcon } from './Icons'


const PokemonCard: FC<ICardProps> = ({ name, id, types }) => {
  const bgColors = getBackgroundColors(types)

  return (
    <Link href={`pokemon/${name}`} prefetch={false}>
      <div className="hover:scale-105">
        <Card bgColors={bgColors}>
          <PokemonIcon className="absolute w-52 fill-primary stroke-0 opacity-25" />

          <p
            className="absolute top-2 left-8 text-4xl font-bold tracking-widest drop-shadow-2xl"
            style={{
              color: bgColors[0].medium,
            }}
          >
            {`#${id.toString().padStart(3, '0')}`}
          </p>

          <Image
            src={`${IMG_URL + id}.webp`}
            alt={name}
            height={200}
            width={200}
            loading={id === 1 ? 'eager' : 'lazy'}
            decoding="async"
            className="drop-shadow xl:h-36 xl:w-36 2xl:h-44 2xl:w-44"
            style={{ contentVisibility: 'auto' }}
          />
        </Card>

        <CardFooter name={name} types={types} />
      </div>
    </Link>
  )
}

export default PokemonCard
