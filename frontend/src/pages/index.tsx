import Head from "next/head";
import { fetchAPI } from "../../lib/api";

import { TellUsForm } from "../components/TellUsForm";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Styles from "../styles/home.module.scss";


type Image = {
  id: number,
  attributes: {
    alternativeText: string,
    url: string
  }
}

type Card = {
  id: number;
  title: string;
  description: string;
  image: {
    data: Image
  }
}


interface HomeProps {
  dados: {
    title: string,
    card: Card[],
    partners: Image[],
    image: {
      id: number,
      url: string,
      altText: string,
    },
  }
  
}


export default function Home({ dados } : HomeProps){
  
  return (
    <>
      <Head>
        <title>Início | CT JUNIOR</title>
      </Head>
      <main>
        <section className={Styles.sectionInitial} dangerouslySetInnerHTML={{__html: dados.title}} >
          
        </section>
        <section className={Styles.servicesSection}>
          <div className={Styles.servicesContent}>
            <div className={Styles.servicesTitle}>
              <h2>Nossos Serviços</h2>
              <span></span>
            </div>

            {dados.card.map(card =>(
              <div key={card.id} className={Styles.servicesCard}>
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${card.image.data.attributes.url}`} alt="" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
 
            <button className={Styles.requestDiagnosis}>
              Solicitar um Diagnóstico
            </button>
          </div>
        </section>
        <section className={Styles.whyCtjuniorSection}>
            <div className={Styles.whyCtjuniorContent}>
                <div className={Styles.whyCtjuniorTitle}> 
                    <h2>Por que a CT Junior</h2>
                    <span></span>
                </div>
                <p>Entendemos suas necessidades e construímos seus sonhos a partir de nossos projetos.</p>
                <ul>
                    <li>Somos uma instituição sem fins lucrativos, formada por jovens voluntários da maior universidade do Espírito Santo, e oferecemos serviço de excelência com ótimo custo benefício.</li>
                    <li>A CT Junior se encontra no maior Centro Tecnológico do Espírito Santo, contando com apoio de professores e alunos renomados dessa instituição de elite.</li>
                    <li>Estamos há mais de 27 anos no mercado, apresentando soluções para clientes de diversos setores. Todo nosso faturamento é reinvestido na profissionalização dos estudantes voluntários que participam do projeto.</li>
                </ul>
                <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${dados.image.url}`} alt={dados.image.altText} />
            </div>
        </section>
        <section className={Styles.partnersSection}>
            <div className={Styles.partnersTitle}>
                <h2>Nossos Parceiros</h2>
                <span></span>
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
              {dados.partners.map(images => (
                <SwiperSlide key={images.id}><img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${images.attributes.url}`}/></SwiperSlide>
              ))}
              
              
            </Swiper>
        </section>
        <section className={Styles.contactUs}>
          <div className={Styles.contactUsTitle}>
            <h2>Nos conte sua ideia!</h2>
            <span></span>
          </div>
          <TellUsForm/>      
        </section>
      </main>

    </>
  );
};

export async function getStaticProps() {
  const dadosRes = await fetchAPI("/index");

  const dados = {
    title: dadosRes.data.attributes.hero_text,
    card: dadosRes.data.attributes.card,
    partners: dadosRes.data.attributes.partners.data,
    image: {
      id: dadosRes.data.attributes.por_que_ct.data.id,
      url: dadosRes.data.attributes.por_que_ct.data.attributes.url,
      altText: dadosRes.data.attributes.por_que_ct.data.attributes.alternativeText,
    }
  }

  return {
    props: {
      dados,
    },
    revalidate: 1,
  };
}




