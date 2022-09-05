import {QueryPokemonFilter} from "@/api/fetchPokemons";

type FilterParam = { name: string } | { type: string };

export const getFilterParam = (): QueryPokemonFilter => {
    const queryString = typeof window !== "undefined" ? new URLSearchParams(window?.location.search) : new URLSearchParams('')

    const name = queryString.get('name');
    const type = queryString.get('type');

    return { name, type };
};

export const getNewRoute = (param: FilterParam) => {
    const { name, type } = getFilterParam();
    const merged = { name, type, ...param };

    const temp = [];
    if (merged.name) temp.push(['name', merged.name]);
    if (merged.type) temp.push(['type', merged.type]);

    const qs = temp.map(([key, value]) => `${key}=${value}`).join('&');
    return `${window.location.pathname}?${qs}`;
};
