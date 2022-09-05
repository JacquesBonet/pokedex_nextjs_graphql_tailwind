import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';

import {useQueryPokemonTypes} from "@/api/hooks/pokemonTypes";
import { getNewRoute } from '@/utils/url';

export default function ListFilter() {
    const {types} = useQueryPokemonTypes();
    const { query, replace } = useRouter();

    const handleNewFilter = ({ target }: ChangeEvent<HTMLInputElement>) => (
        replace(getNewRoute({ name: target.value.trim() }))
    )

    const handleNewType = ({ target }: ChangeEvent<HTMLInputElement>) => (
        replace(getNewRoute({ type: target.value.trim() }))
    )

    return (
        <>
            <input
                type="text"
                placeholder="🔍 Search by name"
                className="rounded-md bg-slate-200 px-3 lg:w-52"
                onInput={handleNewFilter}
                maxLength={11}
                defaultValue={query.name || ''}
            />

            <select
                value={query.type}
                onChange={handleNewType}
                className="rounded-md bg-slate-200 px-3 lg:w-52"
            >
                <option value="0">All types</option>
                {types.map(({ id, name }) => (
                    <option key={id} value={id}>
                        {name}
                    </option>
                ))}
            </select>

        </>
    );
}
