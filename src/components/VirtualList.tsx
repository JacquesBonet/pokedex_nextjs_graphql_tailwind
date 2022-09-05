import React, { FC } from "react";

import { ICardProps, IPage } from "@/types";

export interface IVirtualListProps {
  Element: FC<ICardProps>,
  pages?: IPage[][],
  observe: (props: HTMLElement) => void
}

export function VirtualList({Element, pages, observe}: IVirtualListProps) {
  return <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {pages?.map((page: IPage[], idx: number) =>
      page?.map((data: IPage, jdx: number) => {
        const isLast = pages.length * page.length - (idx + 1) * (jdx + 1) === 0
        const { id, name, types } = data

        return (
          <li
            key={name}
            ref={isLast ? observe : null}
            className="h-80 w-full"
          >
            <Element name={name} id={id} types={types} />
          </li>
        )
      })
    )}
  </ul>
}
