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
  imgSrc: "/images/dualEng.png",
  title: "SITE INSTITUCIONAL Dual Engenharia",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample2: ModalData = {
  imgSrc: "/images/sindipesMockup.png",
  title: "SITE INSTITUCIONAL SINDPES",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}


const modalDataSample3: ModalData = {
  imgSrc: "/images/eurolog.png",
  title: "SITE INSTITUCIONAL Eurolog",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.Pellentesque habitant morbi tristique senectus et netus et malesuadafames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor  et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut  adipiscing."
}

const modalDataSample4: ModalData = {
  imgSrc: "/images/pcMil.png",
  title: "SITE INSTITUCIONAL PC MIL",
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
                    <img src="/images/dualEng.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                    <img src="/images/sindpes.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample3)} className={Styles.card}>
                    <img src="/images/eurolog.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample4)} className={Styles.card}>
                    <img src="/images/pcMil.png" alt="" />
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
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample1)} className={Styles.card}>
                    <img src="/images/dualEng.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample2)} className={Styles.card}>
                    <img src="/images/sindpes.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample3)} className={Styles.card}>
                    <img src="/images/eurolog.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSample4)} className={Styles.card}>
                    <img src="/images/pcMil.png" alt="" />
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
