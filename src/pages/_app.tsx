import '../styles/globals.css'

import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useState } from 'react'

import { Layout } from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
   const [queryClient] = useState(
      () =>
         new QueryClient({
            defaultOptions: {
               queries: {
                  staleTime: Infinity,
               },
            },
         }),
   )

   return (
      <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </Hydrate>
      </QueryClientProvider>
   )
}

export default MyApp
