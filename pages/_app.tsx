import '../styles/global.css'
import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'
import Plain from '../layouts/plain'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Plain

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
