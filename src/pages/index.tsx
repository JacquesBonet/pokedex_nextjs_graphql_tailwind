import React from 'react'

import { useInfiniteQueryPokemons } from '@/api/hooks/pokemons'
import PokemonCard from '@/components/PokemonCard'
import { VirtualList } from "@/components/VirtualList";

function Home() {
  const { pages, observe} = useInfiniteQueryPokemons()

  return (
    <div className="container mx-auto">
      <VirtualList Element={PokemonCard} observe={observe} pages={pages} />
    </div>
  )
}

export default Home
