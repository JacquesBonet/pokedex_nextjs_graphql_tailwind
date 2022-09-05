import { Pokemon_V2_Type } from '@/generated/graphql.types';

import { fetcher } from './fetcher';

const POKEMON_TYPES = /* GraphQL */ `
  query PokemonsTypes {
    pokemon_v2_pokemontype(order_by: { type_id: asc }, distinct_on: type_id) {
      pokemon_v2_type {
        id
        name
      }
    }
  }
`;

type FetchPokemonsTypesResponse = {
    pokemon_v2_pokemontype: { pokemon_v2_type: Pick<Pokemon_V2_Type, 'id' | 'name'> }[];
};

export type QueryPokemonsTypesData = {
    types: Pick<Pokemon_V2_Type, 'id' | 'name'>[];
};

export const fetchPokemonTypes: () => Promise<QueryPokemonsTypesData> = async () => {
    const res = await fetcher<FetchPokemonsTypesResponse>(POKEMON_TYPES);
    const types = res.pokemon_v2_pokemontype.map(({ pokemon_v2_type }) => ({
        id: pokemon_v2_type!.id,
        name: pokemon_v2_type!.name,
    }));

    return {
        types: types.sort((a, b) => a.name.localeCompare(b.name)),
    };
};
