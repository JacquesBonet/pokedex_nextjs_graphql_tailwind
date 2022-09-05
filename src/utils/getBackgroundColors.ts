import { IColorVariant } from "@/types";

import { PokemonTypeColor } from './colors'

const getBackgroundColors = (
  types: string[]
): IColorVariant[] =>
  types?.map((type) => {
    const [, backgroundColor] = Object.entries(PokemonTypeColor).find(
      ([key, _]) => key === type
    )
    return backgroundColor
  })

export default getBackgroundColors
