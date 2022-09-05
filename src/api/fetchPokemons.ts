import { QueryFunctionContext } from '@tanstack/react-query'

import { IPokemon } from '@/types/pokemon'

import { fetcher } from './fetcher'

export const LIMIT = 20

export type QueryPokemonFilter = {
   name: string | null
   type?: number | string | null
}

export const INITIAL_FILTER = {
   name: '',
   type: '',
}

export type FetchPokemonsResponse = {
   pokemon_v2_pokemon: {
      id: number
      name: string
      pokemon_v2_pokemontypes: {
         pokemon_v2_type: {
            name: string
         }
      }[]
   }[]
}

export const fetchPokemons = async (
   ctx: QueryFunctionContext<['pokemons', QueryPokemonFilter]>,
): Promise<IPokemon[]> => {
   const { name, type } = ctx.queryKey[1]

   const res = await fetcher<FetchPokemonsResponse>(`
        query Pokemons {
          pokemon_v2_pokemon(
            order_by: { id: asc }
            offset: ${ctx.pageParam || 0}
            where: {
              ${name ? `name: { _ilike: "%${name}%" }` : ''}
              ${
                 type && Number(type)
                    ? `pokemon_v2_pokemontypes: { type_id: { _eq: ${type} } }`
                    : ''
              }
            }
            limit: ${LIMIT}
          ) {
            id
            name
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
            }
          }
        }
      `)
   return res.pokemon_v2_pokemon.map((elem) => ({
      id: elem.id,
      name: elem.name,
      types: elem.pokemon_v2_pokemontypes.map((aType) => aType.pokemon_v2_type.name),
   }))
}
