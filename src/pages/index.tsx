import PokemonCard from '@/components/PokemonCard'
import { VirtualList } from "@/components/VirtualList";
import { useInfiniteQueryPokemons } from '@/hooks/pokemons'

function Home() {
  const { pages, observe} = useInfiniteQueryPokemons()

  return (
    <div className="container mx-auto">
      <VirtualList Element={PokemonCard} observe={observe} pages={pages} />
    </div>
  )
}

export default Home
