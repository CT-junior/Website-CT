import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/global.scss'
import { WhatsappButton } from '../components/WhatsappButton'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>CT JUNIOR</title>
      </Head>
      <Header />
      <WhatsappButton number={"5527997779356"} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp