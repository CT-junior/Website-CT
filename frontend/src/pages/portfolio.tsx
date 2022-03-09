/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Modal from "react-modal";
import { useState } from "react";

import { TitleOrange } from "../components/TitleOrange";
import { Carousel } from "../components/Carousel";
import { SwiperSlide } from "swiper/react";

import Styles from "../styles/portfolio.module.scss";
import { PortfolioModal } from "../components/PortfolioModal";

type ModalData = {
  imgSrc: string;
  title: string;
  text: string;
}

const modalDataSample1: ModalData = {
  imgSrc: "/images/sindpes.png",
  title: "SITE INSTITUCIONAL SINDPES",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample2: ModalData = {
  imgSrc: "/images/dualEng.png",
  title: "SITE INSTITUCIONAL Dual Engenharia",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}


export default function Portifolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(modalDataSample1);

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
              <h3>TECNOLOGIA</h3>
              <Carousel>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                  <img src="/images/dualEng.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample1)} className={Styles.card}>
                  <img src="/images/sindpes.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                  <img src="/images/eurolog.png" alt="" />
                </SwiperSlide>
              </Carousel>
            </div>
            <div className={Styles.contentCards}>
              <h3>CONSTRUÇÃO CIVIL</h3>
              <Carousel>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample1)} className={Styles.card}>
                  <img src="/images/dualEng.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                  <img src="/images/sindpes.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={() => handleOpenModal(modalDataSample1)} className={Styles.card}>
                  <img src="/images/eurolog.png" alt="" />
                </SwiperSlide>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      
      
      <PortfolioModal handleCloseModal={handleCloseModal} modalIsOpen={modalIsOpen} modalData={modalData} />
    </>
  );
}
