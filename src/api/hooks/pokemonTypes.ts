import {useQuery} from "@tanstack/react-query";

import {fetchPokemonTypes, QueryPokemonsTypesData} from "@/api/fetchPokemonTypes";


export const useQueryPokemonTypes = ():QueryPokemonsTypesData  => {
    const {data = {types: []}} = useQuery<QueryPokemonsTypesData,
        unknown,
        QueryPokemonsTypesData,
        ['pokemon-types']>(['pokemon-types'], fetchPokemonTypes);

    return {
        types: data.types
    };
}
