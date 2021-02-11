import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CloudTaskr({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default CloudTaskr
