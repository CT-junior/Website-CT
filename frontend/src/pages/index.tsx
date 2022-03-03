import Head from "next/head";

import { TellUsForm } from "../components/TellUsForm";
import { TitleOrange } from "../components/TitleOrange";
import { ButtonOrange } from "../components/ButtonOrange";

import { Carousel } from "../components/Carousel";
import { SwiperSlide } from 'swiper/react';

import Styles from "../styles/home.module.scss";


export default function IndexPage(){
  return (
    <>
      <Head>
        <title>Início | CT JUNIOR</title>
      </Head>
      <main>
        <section className={Styles.sectionInitial}>
          <h1>
            Soluções em
            <br />
            <b>Tecnologia Construção Civil</b>
          </h1>
        </section>
        <section className={Styles.servicesSection}>
          <div className={Styles.servicesContent}>
            <TitleOrange>Nosso Serviços</TitleOrange>
            <div className={Styles.servicesCard}>
              <img src="./images/logoTecnologia.svg" alt="" />
              <h3>TECNOLOGIA</h3>
              <p>
                Desenvolvemos sites institucionais, e-commerces e sistemas web
                com suporte a todos os dispositivos móveis. Trabalhamos também
                com protótipos de aplicativos.
              </p>
            </div>
            <div className={Styles.servicesCard}>
              <img src="./images/logoEngenharia.svg" alt="" />
              <h3>CONSTRUÇÃO CIVIL</h3>
              <p>
                Realizamos projetos elétricos, arquitetônicos e
                hidrossanitários, projetos de piscina e de captação de água da
                chuva. Trabalhamos também com e regularização, usucapião de
                imóveis.
              </p>
            </div>
            <ButtonOrange>Solicitar um Diagnóstico</ButtonOrange>
          </div>
        </section>
        <section className={Styles.whyCtjuniorSection}>
            <div className={Styles.whyCtjuniorContent}>
                <TitleOrange>Por que a CT Junior</TitleOrange>
                <p>Entendemos suas necessidades e construímos seus sonhos a partir de nossos projetos.</p>
                <ul>
                    <li>Somos uma instituição sem fins lucrativos, formada por jovens voluntários da maior universidade do Espírito Santo, e oferecemos serviço de excelência com ótimo custo benefício.</li>
                    <li>A CT Junior se encontra no maior Centro Tecnológico do Espírito Santo, contando com apoio de professores e alunos renomados dessa instituição de elite.</li>
                    <li>Estamos há mais de 27 anos no mercado, apresentando soluções para clientes de diversos setores. Todo nosso faturamento é reinvestido na profissionalização dos estudantes voluntários que participam do projeto.</li>
                </ul>
                <img src={'/images/studentsWorking.png'} alt="" />
            </div>
        </section>
        <section className={Styles.partnersSection}>
            <TitleOrange>Nossos Parceiros</TitleOrange>
            <Carousel>
              <SwiperSlide><img src="/images/rocketseatLogo.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="/images/ufesLogo.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="/images/americanasLogo.png" alt="" /></SwiperSlide>
            </Carousel>
        </section>
        <section className={Styles.contactUs}>
          <TitleOrange>Nos conte sua ideia!</TitleOrange>
          <TellUsForm/>      
        </section>
      </main>

    </>
  );
};

