import Link from "next/link";
import { BsGithub } from "react-icons/bs";

import { useScrollDirection } from "@/hooks/useScrollDirection";
import { IDirection } from "@/types";
import ListFilter from "@/components/ListFilter";

export function Navbar() {
  return <div className={`fixed inset-x-0 ${ useScrollDirection() === IDirection.DOWN ? "-top-24" : "top-0"} z-50 h-24 w-full transition-all duration-500 bg-primary `}>
      <div className="flex h-full w-full flex-row items-center justify-around h-14 px-3 shadow-md shadow-accent/20">
        <Link href="/">
          <h1 className="text-2xl font-bold text-accent">Pokeapi.co</h1>
        </Link>
        <ListFilter />
        <Link href="https://github.com/JacquesBonet/pokedex_nextjs_react_query_taildwind">
          <BsGithub className="text-3xl duration-500 ease-in-out hover:text-accent" />
        </Link>
      </div>
    </div>
}
