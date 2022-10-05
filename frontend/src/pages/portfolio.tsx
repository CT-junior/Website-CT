/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useState } from "react";
import useWindowDimensions from "../Hooks/useWindowDimensions";

import { TitleOrange } from "../components/TitleOrange";
import { Carousel } from "../components/Carousel";
import { SwiperSlide } from "swiper/react";
import { PortfolioModal } from "../components/PortfolioModal";

import Styles from "../styles/portfolio.module.scss";

type ModalData = {
  imgSrc: string;
  title: string;
  text: string;
}

const modalDataSample1: ModalData = {
  imgSrc: "/images/rewaSupply.png",
  title: "ECCOMERCE REWA SUPPLY",
  text: "Nesse projeto nossa empresa foi contratada para desenvolver o e-commerce de uma loja de roupas de Vila Velha. Tendo sido lançado não só no Brasil, mas também na Austrália e Estados Unidos, o e-commerce em questão possibilitou um aumento nas vendas da loja, além de uma extensão de seu alcance e uma estética muito mais agradável para o site, que é totalmente acessível seja por celular ou computador."
}

const modalDataSample2: ModalData = {
  imgSrc: "/images/sindipesMockup.png",
  title: "SITE INSTITUCIONAL SINDPES",
  text: "SINDPES (Sindicato dos Psicanalistas do Espírito Santo) buscava através do website um meio para aumento do alcance da marca juntamente como uma forma de estar expressando as atividades e as pessoas as quais atuam e fazem parte das discussões. Diante disso, realizou-se um site com uma boa navegabilidade e desing agradável, garantindo uma expansão do grupo e uma afirmação conjunta."
}


const modalDataSample3: ModalData = {
  imgSrc: "/images/eurolog.png",
  title: "SITE INSTITUCIONAL Eurolog",
  text: "A EUROLOG, tinha como objetivo desenvolver por completo um site institucional, buscando maior alcance e visibilidade na internet, com o intuito de fortalecer ainda mais a marca no mercado. O objetivo da cliente foi alcançado com sucesso."
}

const modalDataSample4: ModalData = {
  imgSrc: "/images/bbuttonLogo.png",
  title: "WEB SITE BBUTTON",
  text: "A Bbutton tinha como objetivo criar um site institucional, para aumentar seu alcance, com o desafio de desenvolver um site que facilitasse a manutenção posteriormente. Entregamos um site que atendesse todas as demandas da cliente."
}

const modalDataSample9: ModalData = {
  imgSrc: "/images/corecon.png",
  title: "SITE INSTITUCIONAL CORECON-ES",
  text: "Atendendo também instituições estaduais, nesse projeto nos foi solicitado a criação de um site institucional para a CORECON. Com nossos serviços o site passou a ser completamente responsivo (que se adapta a qualquer tamanho de janela) e focado na divulgação e fácil manipulação de todas as informações relevantes à instituição."
}

const modalDataSample5: ModalData = {
  imgSrc: "/images/civil/projetoCarlos.png",
  title: "Projeto Carlos",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample6: ModalData = {
  imgSrc: "/images/civil/projetoIvanitas.png",
  title: "Projeto Ivanitas",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample7: ModalData = {
  imgSrc: "/images/civil/projetoOrlene.png",
  title: "Projeto Orlene",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample8: ModalData = {
  imgSrc: "/images/civil/projetoMarcelo.png",
  title: "Projeto Marcelo",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}



export default function Portifolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(modalDataSample1);

  const { width } = useWindowDimensions();

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenModal(modalContent: ModalData) {
    setModalData(modalContent);
    setModalIsOpen(true);
  }

  return (
    <>
      <Head>
        <title>Portfólio | CT JUNIOR</title>
      </Head>

      <main>
        <section className={Styles.ourWorksSection}>
          <div className={Styles.ourWorksContent}>
            <TitleOrange>Nossos Trabalhos</TitleOrange>
            <p>
              Confira alguns projetos que já produzimos! É a melhor maneira de
              nos conhecer e se inspirar.
            </p>
            <div className={Styles.contentCards}>
              <div className={Styles.carouselHeader}>
                <h3>TECNOLOGIA</h3>
                <button className="prev-tec"><img src="/images/arrowLeft.svg" alt="" /></button>
                <button className="next-tec"><img src="/images/arrowRight.svg" alt="" /></button>
              </div>

              <div className={Styles.carouselContainer}>
                <Carousel
                  slidesPerView={Number(`${width < 475 ? 2.5 : 3.5}`)}
                  autoplay={false}
                  navigation={{
                    nextEl: ".next-tec",
                    prevEl: ".prev-tec",
                  }}

                >
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample1)} className={Styles.card}>
                    <img src="/images/rewaSupply.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                    <img src="/images/sindpes.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample3)} className={Styles.card}>
                    <img src="/images/eurolog.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample4)} className={Styles.card}>
                    <img src="/images/bbuttonIcon.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample9)} className={Styles.card}>
                    <img src="/images/corecon.png" alt="" />
                  </SwiperSlide>
                </Carousel>
              </div>
            </div>
            <div className={Styles.contentCards}>
              <div className={Styles.carouselHeader}>
                <h3>CONSTRUÇÃO CIVIL</h3>
                <button className="prev-civil"><img src="/images/arrowLeft.svg" alt="" /></button>
                <button className="next-civil"><img src="/images/arrowRight.svg" alt="" /></button>
              </div>
              <div className={Styles.carouselContainer}>
                <Carousel
                  slidesPerView={Number(`${width < 475 ? 2.5 : 3.5}`)}
                  autoplay={false}
                  navigation={{
                    nextEl: ".next-civil",
                    prevEl: ".prev-civil",
                  }}
                >
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample5)} className={Styles.card}>
                    <img src="/images/civil/projetoCarlos.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample6)} className={Styles.card}>
                    <img src="/images/civil/projetoIvanitas.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample7)} className={Styles.card}>
                    <img src="/images/civil/projetoOrlene.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample8)} className={Styles.card}>
                    <img src="/images/civil/projetoMarcelo.png" alt="" />
                  </SwiperSlide>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>


      <PortfolioModal handleCloseModal={handleCloseModal} modalIsOpen={modalIsOpen} modalData={modalData} />
    </>
  );
}
