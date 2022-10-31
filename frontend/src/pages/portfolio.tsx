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

// Projetos de tecnologia

const modalDataSampleTec1: ModalData = {
  imgSrc: "/images/rewaSupply.png",
  title: "ECCOMERCE - Rewa Supply",
  text: "Nesse projeto nossa empresa foi contratada para desenvolver o e-commerce de uma loja de roupas de Vila Velha. Tendo sido lançado não só no Brasil, mas também na Austrália e Estados Unidos, o e-commerce em questão possibilitou um aumento nas vendas da loja, além de uma extensão de seu alcance e uma estética muito mais agradável para o site, que é totalmente acessível seja por celular ou computador."
}

const modalDataSampleTec2: ModalData = {
  imgSrc: "/images/sindipesMockup.png",
  title: "WEBSITE - SINDPES",
  text: "O SINDPES (Sindicato dos Psicanalistas do Espírito Santo) buscava através do website um meio para aumento do alcance da marca juntamente como uma forma de estar expressando as atividades e as pessoas as quais atuam e fazem parte das discussões. Diante disso, realizou-se um site com uma boa navegabilidade e design agradável, garantindo uma expansão do grupo e uma afirmação conjunta."
}


const modalDataSampleTec3: ModalData = {
  imgSrc: "/images/eurolog.png",
  title: "WEBSITE - Eurolog",
  text: "A Eurolog, tinha como objetivo desenvolver por completo um site institucional, buscando maior alcance e visibilidade na internet, com o intuito de fortalecer ainda mais a marca no mercado. O objetivo da cliente foi alcançado com sucesso."
}

const modalDataSampleTec4: ModalData = {
  imgSrc: "/images/bbuttonIcon.png",
  title: "WEBSITE - BButton",
  text: "A Bbutton tinha como objetivo criar um site institucional, para aumentar seu alcance, com o desafio de desenvolver um site que facilitasse a manutenção posteriormente. Entregamos um site que atendesse todas as demandas da cliente."
}

const modalDataSampleTec5: ModalData = {
  imgSrc: "/images/corecon.png",
  title: "WEBSITE - CORECON-ES",
  text: "Atendendo também instituições estaduais, nesse projeto nos foi solicitado a criação de um site institucional para a CORECON. Com nossos serviços o site passou a ser completamente responsivo (que se adapta a qualquer tamanho de janela) e focado na divulgação e fácil manipulação de todas as informações relevantes à instituição."
}

// Projetos de civil

const modalDataSampleCivil1: ModalData = {
  imgSrc: "/images/civil/projetoCarlos.png",
  title: "Projeto Carlos",
  text: "Nesse projeto nosso desafio foi elaborar e integrar em um terreno acidentado todos os projetos arquitetônico, elétrico, hidrossanitário e de captação de água da chuva para um edifício comercial. Nossa busca pela maior satisfação de nosso cliente nos levou a buscar um ótimo aproveitamento não só do espaço, mas também de algumas paisagens privilegiadas de nossa cidade (as cinco pontes, o canal de Vitória e a terceira ponte), o que nos garantiu uma avaliação máxima por parte do cliente.",
}

const modalDataSampleCivil2: ModalData = {
  imgSrc: "/images/civil/projetoOrliene.png",
  title: "Projeto Orliene",
  text: "Orliene possuía um terreno e através dos projetos realizados pela CT Junior conseguiu estar trazendo-o para a realidade. Nesse projeto, buscou-se estar trazendo uma arquitetura agradável para a edificação juntamente com a realização do projeto hidrossanitário que garantiu dimensionamentos corretos e a saída de efluentes da maneira correta."
}

const modalDataSampleCivil3: ModalData = {
  imgSrc: "/images/civil/projetoMarcelo.png",
  title: "Projeto Marcelo",
  text: "Marcelo possui uma residência localizada no bairro Praia do Canto em Vila Velha - ES e buscava realizar uma reforma visando um maior conforto e segurança. Dessa forma, buscou a CT Junior para a realização de seu projeto elétrico, o qual garante maior tranquilidade no seu dia a dia, por meio do dimensionamento correto da rede elétrica e também dos cálculos de cargas e circuitos realizados da maneira correta."
}

const modalDataSampleCivil4: ModalData = {
  imgSrc: "/images/civil/projetoAna&Rita.png",
  title: "Projeto Ana Paula / Rita",
  text: "Ana Paula e Rita adquiriram um lote, com o desejo de construir um sonho de um lar. Porém, a residência se localizaria nos fundos, pois também possuíam a vontade de construir um empreendimento na parte da frente do terreno. Contando com os projetos arquitetônico, elétrico e hidrossanitário, a edificação localizada em Praia Grande, Fundão – ES, contou com um ótimo aproveitamento dos espaços na realização dos cômodos, adequação à acessibilidade (banheiro PNE e rampas). Avaliado com a nota máxima pela cliente."
}

const modalDataSampleCivil5: ModalData = {
  imgSrc: "/images/civil/projetoAruanã.png",
  title: "Projeto Aruanã",
  text: "Realizamos a reformulação da fachada do edifício, que se encontra no centro de Vila Velha – ES. O projeto entregou um visual totalmente novo para o edifício, contando com um design moderno. O resultado agradou a todos os moradores do condomínio, e o representante garantiu à CT uma avaliação máxima ao trabalho realizado."
}

const modalDataSampleCivil6: ModalData = {
  imgSrc: "/images/civil/projetoSicoob.png",
  title: "Projeto Sicoob",
  text: "Foram feitos os projetos: arquitetônico (acessível), juntamente com o projeto de piso refletido, elétrico e hidrossanitário da agência, localizada na Serra – ES. A dedicação e excelência da equipe de projetos resultou em uma agência que trouxe segurança, conforto, acessibilidade e design inovador para os trabalhadores e clientes desfrutarem da melhor maneira possível."
}



export default function Portifolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(modalDataSampleTec1);

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
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleTec1)} className={Styles.card}>
                    <img src="/images/rewaSupply.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleTec2)} className={Styles.card}>
                    <img src="/images/sindpes.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleTec3)} className={Styles.card}>
                    <img src="/images/eurolog.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleTec4)} className={Styles.card}>
                    <img src="/images/bbuttonLogo.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleTec5)} className={Styles.card}>
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
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil1)} className={Styles.card}>
                    <img src="/images/civil/projetoCarlos.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil2)} className={Styles.card}>
                    <img src="/images/civil/projetoOrliene.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil3)} className={Styles.card}>
                    <img src="/images/civil/projetoMarcelo.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil4)} className={Styles.card}>
                    <img src="/images/civil/projetoAna&Rita.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil5)} className={Styles.card}>
                    <img src="/images/civil/projetoAruana.png" alt="" />
                  </SwiperSlide>
                  <SwiperSlide onClick={() => handleOpenModal(modalDataSampleCivil6)} className={Styles.card}>
                    <img src="/images/civil/projetoSicob.png" alt="" />
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
