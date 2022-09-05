import { PokemonTypeColor } from "@/utils/colors";

export interface ICardFooterProps {
  name: string,
  types: string[]
}


export function CardFooter({name, types}: ICardFooterProps) {
  return <div className="flex w-full flex-1 flex-col items-center justify-evenly ">
    <h3 className="text-2xl font-bold capitalize tracking-wide text-secondary">
      {name}
    </h3>

    <div className="flex w-full flex-row items-center justify-center gap-4">
      {types.map((typeName: string, idx: number) => (
          <div
            key={idx}
            style={{
              backgroundColor: Object.entries(PokemonTypeColor).find(
                ([key]) => key === typeName
              )[1].medium,
            }}
            className="rounded-md px-2 py-1"
          >
            <p className="text-xs font-semibold tracking-wide text-primary">
              {typeName}
            </p>
          </div>
        ))}
    </div>
  </div>
}
