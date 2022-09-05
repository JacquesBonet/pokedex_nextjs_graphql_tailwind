import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-cool-inview';

import { IPage} from "@/types";
import {getFilterParam} from "@/utils/url";

import {fetchPokemons, LIMIT } from '@/api/fetchPokemons';

export interface IInfiniteQueryPokemons {
    pages?: IPage[][] | undefined,
    observe: (props: HTMLElement) => void
}

export const useInfiniteQueryPokemons = (): IInfiniteQueryPokemons => {
    const { name, type } = getFilterParam();
    const { fetchNextPage, data } = useInfiniteQuery(
        ['pokemons', {name, type}],
        fetchPokemons,
        {
            keepPreviousData: true,
            getNextPageParam: (lastPage, allPages) =>
                lastPage.length < LIMIT ? undefined : allPages.length * LIMIT,
        },
    )
    const { observe } = useInView({
        rootMargin: '200px',
        onEnter: () => {
            fetchNextPage()
        },
    })
    return {
        observe,
        ...data,
    }
}
