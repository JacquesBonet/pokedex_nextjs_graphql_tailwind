import { useRouter } from 'next/router'
import { ChangeEvent, FC } from 'react'

import { useQueryPokemonTypes } from '@/hooks/pokemonTypes'
import { getNewRoute } from '@/utils/url'

export const ListFilter: FC = () => {
   const { types } = useQueryPokemonTypes()
   const { query, replace } = useRouter()

   const handleNewFilter = ({ target }: ChangeEvent<HTMLInputElement>) =>
      replace(getNewRoute({ name: target.value.trim() }))

   const handleNewType = ({ target }: ChangeEvent<HTMLSelectElement>) =>
      replace(getNewRoute({ type: target.value.trim() }))

   return (
      <>
         <input
            type="text"
            placeholder="🔍 Search by name"
            className="bg-slate-200 bg-white border-gray-300 rounded-md  border border-solid px-3 py-1.5 lg:w-52"
            onInput={handleNewFilter}
            maxLength={11}
            defaultValue={query.name || ''}
         />

         <select
            value={query.type}
            onChange={handleNewType}
            className="bg-slate-200 bg-white border-gray-300 rounded-md  border border-solid px-3 py-1.5 lg:w-52"
         >
            <option value="0">All types</option>
            {types.map(({ id, name }) => (
               <option key={id} value={id}>
                  {name}
               </option>
            ))}
         </select>
      </>
   )
}
