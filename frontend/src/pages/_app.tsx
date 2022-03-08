import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import '../styles/global.scss'
import { WhatsappButton } from '../components/WhatsappButton'

function MyApp({ Component, pageProps }: AppProps) {
  
  return  (
    <>
      <Header />
      <WhatsappButton number={"27998422438"} />
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
