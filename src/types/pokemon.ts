export interface IColorVariant {
   light: string
   medium: string
}

export interface IPokemon {
   bgColors?: IColorVariant[]
   id: number
   image?: string
   name: string
   types: string[]
}
