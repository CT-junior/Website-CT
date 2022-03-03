import Head from "next/head";
import Modal from "react-modal";
import { useState } from "react";

import { TitleOrange } from "../components/TitleOrange";
import { Carousel } from "../components/Carousel";
import { SwiperSlide } from "swiper/react";

import Styles from "../styles/portfolio.module.scss";

export default function Portifolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  function handleOpenModal() {
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
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/dualEng.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/sindpes.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/eurolog.png" alt="" />
                </SwiperSlide>
              </Carousel>
            </div>
            <div className={Styles.contentCards}>
              <h3>CONSTRUÇÃO CIVIL</h3>
              <Carousel>
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/dualEng.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/sindpes.png" alt="" />
                </SwiperSlide>
                <SwiperSlide onClick={handleOpenModal} className={Styles.card}>
                  <img src="/images/eurolog.png" alt="" />
                </SwiperSlide>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName={Styles.modalContainer}
        className={Styles.modalContent}
      >
        <div>
          <TitleOrange>SITE INSTITUCIONAL SINDPES</TitleOrange>
        </div>
        <img
          onClick={handleCloseModal}
          className={Styles.iconClose}
          src="/images/closeIconModal.png"
          alt=""
        />
        <img src="/images/sindipesMockup.png" alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
            et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut
            adipiscing.
          </p>
        </div>
      </Modal>
    </>
  );
}
