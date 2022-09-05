import { request, RequestDocument, Variables } from 'graphql-request'

const URL = 'https://beta.pokeapi.co/graphql/v1beta'

export const fetcher = <T>(document: RequestDocument, variables?: Variables) =>
   request<T>(URL, document, variables)

export const readOne = (name: string) =>
   name ? fetch(`${URL}/${name}`).then((response) => response.json()) : ''
