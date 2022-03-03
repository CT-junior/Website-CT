import Head from "next/head";

import { TitleOrange } from "../components/TitleOrange";

import Styles from "../styles/portfolio.module.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Portifolio() {
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
                <Swiper
                    className={Styles.carouselCards}
                    modules={[Autoplay]}     
                    spaceBetween={18}
                    slidesPerView={2.5}
                    loop={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                    }}
                >
                    <SwiperSlide className={Styles.card}><img src="/images/dualEng.png" alt="" /></SwiperSlide>
                    <SwiperSlide className={Styles.card}><img src="/images/sindpes.png" alt="" /></SwiperSlide>
                    <SwiperSlide className={Styles.card}><img src="/images/eurolog.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className={Styles.contentCards}>
                <h3>CONSTRUÇÃO CIVIL</h3>
                <Swiper
                    className={Styles.carouselCards}
                    modules={[Autoplay]}     
                    spaceBetween={18}
                    slidesPerView={2.5}
                    loop={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                    }}
                >
                    <SwiperSlide className={Styles.card}><img src="/images/dualEng.png" alt="" /></SwiperSlide>
                    <SwiperSlide className={Styles.card}><img src="/images/sindpes.png" alt="" /></SwiperSlide>
                    <SwiperSlide className={Styles.card}><img src="/images/eurolog.png" alt="" /></SwiperSlide>
                </Swiper>
            </div>     
          </div>
        </section>
      </main>
    </>
  );
}
