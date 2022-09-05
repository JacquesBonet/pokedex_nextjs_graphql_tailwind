import {
    Pokemon_V2_Ability,
    Pokemon_V2_Move,
    Pokemon_V2_Pokemon,
    Pokemon_V2_Pokemonstat,
} from '../generated/graphql.types';

export type PokemonBase = Pick<
    Pokemon_V2_Pokemon,
    'id' | 'name' | 'height' | 'weight' | 'pokemon_v2_pokemontypes'
    >;

export type PokemonStats = Pick<Pokemon_V2_Pokemonstat, 'stat_id' | 'base_stat'>[];

export type PokemonAbilities = {
    pokemon_v2_ability: Pick<Pokemon_V2_Ability, 'name' | 'pokemon_v2_abilityeffecttexts'>;
}[];

export type PokemonMoves = {
    pokemon_v2_move: Pick<Pokemon_V2_Move, 'name' | 'type_id' | 'power'>;
}[];

export type MyPokemon = {
    id: number;
    name: string;
    types: string[];
};

export type PokemonEvolution = {
    evolvesFromSpeciesId: number | null;
    id: number;
    name: string;
    generationId: number;
    generation: string;
    types: string[];
}[];

export type FetchPokemonResponse = {
    pokemon_v2_pokemon: [
            PokemonBase & {
            pokemon_v2_pokemonstats: PokemonStats;
            pokemon_v2_pokemonabilities: PokemonAbilities;
            pokemon_v2_pokemonmoves: PokemonMoves;
        },
    ];
};

export interface IType {
    slot: number
    type: IType2
}

export interface IType2 {
    name: string
    url: string
}

export interface IColorProps {
    normal: IColorVariant
    fire: IColorVariant
    fighting: IColorVariant
    water: IColorVariant
    flying: IColorVariant
    grass: IColorVariant
    poison: IColorVariant
    electric: IColorVariant
    ground: IColorVariant
    psychic: IColorVariant
    rock: IColorVariant
    ice: IColorVariant
    bug: IColorVariant
    dragon: IColorVariant
    ghost: IColorVariant
    dark: IColorVariant
    steel: IColorVariant
    fairy: IColorVariant
}

export interface IColorVariant {
    light: string
    medium: string
};

export interface IPokemon {
    bgColors?: IColorVariant[]
    id: number
    image?: string
    name: string
    types: IType[]
}

