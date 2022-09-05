export interface ICardProps {
   name: string
   id: number
   [x: string]: any
}

export interface IColorsProps {
   [x: string]: IColorVariant
}

export interface IColorVariant {
   light: string
   medium: string
}

export enum IDirection {
   DOWN,
   UP,
}

export interface IPage {
   id: number
   name: string
   types: string[]
}

export interface IPages {
   isFetching: boolean
   observe: (props: HTMLElement) => void
   pages: IPage[]
}

export interface IType {
   slot: number
   type: IType2
}

export interface IType2 {
   name: string
   url: string
}
