/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import { TellUsForm } from '../components/Form/TellUsForm';
import { TitleOrange } from '../components/TitleOrange';
import { ButtonOrange, ButtonOrangeDisplay } from '../components/ButtonOrange';

import { Carousel } from '../components/Carousel';
import { SwiperSlide } from 'swiper/react';

import Styles from '../styles/home.module.scss';
import { url } from 'inspector';
import { useRef } from 'react';

const imagesCarousel = [
  {
    id: 0,
    url: '/images/rocketseatLogo.png',
    name: 'Rocketseat',
  },
  {
    id: 1,
    url: '/images/ufesLogo.png',
    name: 'Ufes',
  },
  {
    id: 2,
    url: '/images/EloGroup.svg',
    name: 'EloGroup',
  },
  {
    id: 3,
    url: '/images/IvanLogo.svg',
    name: 'Ivan Gerhardt',
  },
];

export default function IndexPage() {
  const ref = useRef(null);
  const refMobile = useRef(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
  // };

  const handleClickMobile = () => {
    refMobile.current?.scrollIntoView({
      block: 'end',
      inline: 'end',
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Head>
        <title>Início | CT JUNIOR</title>
      </Head>
      <main>
        <section className={Styles.sectionInitial}>
          <div className={Styles.sectionInitialContent}>
            <h1>
              Soluções em
              <br />
              <b>Tecnologia & Construção Civil</b>
            </h1>
            <svg />
          </div>
          <div className={Styles.sectionInitialInfo}>
            <ButtonOrange>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=5527997767207&text=Ol%C3%A1%2C%20vim%20pelo%20website%20da%20CT!"
              >
                Solicitar um Diagnóstico
              </a>
            </ButtonOrange>
          </div>
        </section>
        <section className={Styles.servicesSection}>
          <div className={Styles.servicesContent}>
            <TitleOrange>Nosso Serviços</TitleOrange>
            <p>
              Desenvolvemos soluções sob medida. É assim que vamos te ajudar
            </p>
            <div className={Styles.servicesCards}>
              <div className={Styles.servicesCard}>
                <div className={Styles.headerCard}>
                  <img src="./images/logoTecnologia.svg" alt="" />
                  <h3>TECNOLOGIA</h3>
                </div>
                <p>
                  Desenvolvemos sites institucionais, e-commerces e sistemas web
                  com suporte a todos os dispositivos móveis. Trabalhamos também
                  com protótipos de aplicativos.
                </p>
              </div>
              <div className={Styles.servicesCard}>
                <div className={Styles.headerCard}>
                  <img src="./images/logoEngenharia.svg" alt="" />
                  <h3>CONSTRUÇÃO CIVIL</h3>
                </div>
                <p>
                  Realizamos projetos elétricos, arquitetônicos e
                  hidrossanitários, projetos de piscina e de captação de água da
                  chuva. Trabalhamos também com e regularização, usucapião de
                  imóveis.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={Styles.whyCtjuniorSection}>
          <div className={Styles.whyCtjuniorContent}>
            <div className={Styles.whyCtjuniorInfo}>
              <TitleOrange>Por que a CT Junior</TitleOrange>
              <p>
                Entendemos suas necessidades e construímos seus sonhos a partir
                de nossos projetos.
              </p>
              <ul>
                <li>
                  Somos uma instituição sem fins lucrativos, formada por jovens
                  voluntários da maior universidade do Espírito Santo, e
                  oferecemos serviço de excelência com ótimo custo benefício.
                </li>
                <li>
                  A CT Junior se encontra no maior Centro Tecnológico do
                  Espírito Santo, contando com apoio de professores e alunos
                  renomados dessa instituição de elite.
                </li>
                <li>
                  Estamos há mais de 27 anos no mercado, apresentando soluções
                  para clientes de diversos setores. Todo nosso faturamento é
                  reinvestido na profissionalização dos estudantes voluntários
                  que participam do projeto.
                </li>
              </ul>
            </div>
            <img src={'/images/studentsWorking.png'} alt="" />
            <img src={'/images/studentsWorkingDesktop.png'} alt="" />
          </div>
        </section>
        <section className={Styles.partnersSection}>
          <TitleOrange>Nossos Parceiros</TitleOrange>
          <div className={Styles.carouselContainer}>
            <Carousel pagination>
              {imagesCarousel.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.url}
                    alt={item.name}
                    max-height={100}
                    max-width={300}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
          <div className={Styles.partnersLogos}>
            {imagesCarousel.map((item) => (
              <img key={item.id} src={item.url} alt={item.name} />
            ))}
            <div ref={ref} />
          </div>
        </section>
        <section className={Styles.contactUs} ref={refMobile}>
          {/* <TitleOrange>Nos conte sua ideia!</TitleOrange> */}
          {/* <TellUsForm /> */}
        </section>
      </main>
    </>
  );
}
