import Head from "next/head";

import { TellUsForm } from "../components/TellUsForm";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
            <div className={Styles.servicesTitle}>
              <h2>Nossos Serviços</h2>
            </div>
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
            <button className={Styles.requestDiagnosis}>
              Solicitar um Diagnóstico
            </button>
          </div>
        </section>
        <section className={Styles.whyCtjuniorSection}>
            <div className={Styles.whyCtjuniorContent}>
                <div className={Styles.whyCtjuniorTitle}> 
                    <h2>Por que a CT Junior</h2>
                </div>
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
            <div className={Styles.partnersTitle}>
                <h2>Nossos Parceiros</h2>
            </div>
            <Swiper
              className={Styles.partnersCarrousel}
              modules={[Autoplay]}     
              spaceBetween={18}
              slidesPerView={2.2}
              loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
              <SwiperSlide><img src="/images/rocketseatLogo.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="/images/ufesLogo.png" alt="" /></SwiperSlide>
              <SwiperSlide><img src="/images/americanasLogo.png" alt="" /></SwiperSlide>
              
            </Swiper>
        </section>
        <section className={Styles.contactUs}>
          <div className={Styles.contactUsTitle}>
            <h2>Nos conte sua ideia!</h2>
          </div>
          <TellUsForm/>      
        </section>
      </main>

    </>
  );
};

