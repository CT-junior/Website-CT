import { NextPage } from "next"
import Head from "next/head";

import { Header } from "../components/Header";

const IndexPage:NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | CT JUNIOR</title>
      </Head>
      <Header />
      <main >
        <h1>Hello World</h1>
      </main>
      
    </>
    
  )
};

export default IndexPage;


