import { NextPage } from "next"
import Head from "next/head";

import { Header } from "../components/Header";

import Styles from '../styles/home.module.scss'

const IndexPage:NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | CT JUNIOR</title>
      </Head>

      <Header />
      
      <main>
        <section className={Styles.sectionInitial}>
          <h1>Soluções em<br/><b>Tecnologia Construção Civil</b></h1>
        </section>
        <section className={Styles.servicesSection}>
          <div className={Styles.servicesContent}>
            <div className={Styles.servicesTitle}>
              <h2>Nossos Serviços</h2>
            </div>
            <div className={Styles.servicesCard}>
              <img src="./images/logoTecnologia.svg" alt="" />
              <h3>TECNOLOGIA</h3>
              <p>Desenvolvemos sites institucionais, e-commerces e sistemas web com suporte a todos os dispositivos móveis.
Trabalhamos também com protótipos de aplicativos.</p>
            </div>
            <div className={Styles.servicesCard}>
              <img src="./images/logoEngenharia.svg" alt="" />
              <h3>CONSTRUÇÃO CIVIL</h3>
              <p>Realizamos projetos elétricos, arquitetônicos e hidrossanitários, projetos de piscina e de captação de água da chuva.
Trabalhamos também com e regularização, usucapião de imóveis.</p>

            </div>
            {/* <a>Solicitar um Diagnóstico</a> */}
            <button className={Styles.requestDiagnosis}>
              Solicitar um Diagnóstico
            </button>
          </div>
          
        </section>
       

      </main>
      
    </>
    
  )
};

export default IndexPage;