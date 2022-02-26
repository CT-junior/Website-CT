import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

import { fetchAPI } from "../../lib/api";

import Styles from "../styles/sobrenos.module.scss";

type Image = {
  url: string,
  altText: string,  
}

type OurValues = {
  id: number,
  title: string,
  description: string,
  image: {
    data : {
      attributes: {
        url: string,
        alternativeText: string,
      }
    }
  }

}

interface SobreProps {
  dados: {
    title: string,
    content: string,
    image: Image,
    title2: string,
    content2: string,
    image2: Image,
    title3: string,
    content3: string,
    ourValues: OurValues[]
  }
  
}

export default function SobreNosPage({ dados } : SobreProps){

  useEffect(() =>{
    fetch('http://localhost:1337/api/sobre?populate=*')
  })

  return (
    <>
      <Head>
        <title>Sobre Nós | CT JUNIOR</title>
      </Head>

      <main>
        <section className={Styles.aboutUsContainer}>
          <div className={Styles.aboutUsContent}>
            <div className={Styles.aboutUsTitle}>
              <h2>{dados.title}</h2>
            </div>
            <p dangerouslySetInnerHTML={{__html: dados.content}} ></p>
            
            <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${dados.image.url}`} alt={dados.image.altText}/> 
          </div>  
        </section>

        <section className={Styles.ourAwardsContainer}>
          <div className={Styles.ourAwardsContent}>
            <div className={Styles.ourAwardsTitle}>
              <h2>{dados.title2}</h2>
            </div>
            <ul dangerouslySetInnerHTML={{__html: dados.content2}}></ul>
            <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${dados.image2.url}`} alt={dados.image2.altText} />
          </div>
        </section>

        <section className={Styles.ourBelievingsContainer}>
          <div className={Styles.ourBelievingsContent}>
            <div className={Styles.ourBelievingsTitle}>
              <h2>{dados.title3}</h2>
            </div>
            <div className={Styles.ourBelievingsTopics} dangerouslySetInnerHTML={{__html: dados.content3}}>
              
            </div>
          </div>
        </section>

        <section className={Styles.ourValuesContainer}>
          <div className={Styles.ourValuesContent}>
            <div className={Styles.ourValuesTitle}>
              <h2>Nossos valores</h2>
            </div>

            <div className={Styles.ourValuesTopics}>
              {dados.ourValues.map(valores => (
                <div key={valores.id}>
                  <img src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${valores.image.data.attributes.url}`} alt="Icone Foco em Resultados" />
                  <p><b>{valores.title}:</b> {valores.description}.</p>
                </div>
              ))}
              {/* <img src="./images/focoResultados.svg" alt="Icone Foco em Resultados" />
              <p><b>Foco em resultados:</b> Buscamos incessantemente a geração de valor para nossos clientes, com foco na qualidade, satisfação e no desenvolvimento de nossos produtos e colaboradores.</p>

              <img src="./images/espiritoDono.svg" alt="Icone Espirito de Dono" />
              <p><b>Espirito de dono:</b> Pensamos e agimos como donos, zelando pela nossa instituição. Estamos cientes que somos os únicos responsáveis pelos nossos resultados.</p>

              <img src="./images/empatia.svg" alt="Icone Empatia" />
              <p><b>Empatia:</b> Respeitamos e compreendemos as diferenças, valorizamos as pessoas e nos preocupamos com seu bem estar.</p>

              <img src="./images/profissionalismo.svg" alt="Icone Profissionalismo" />
              <p><b>Profissionalismo:</b> Agimos com ética, responsabilidade e comprometimento com nossos resultados.</p>

              <img src="./images/feedback.svg" alt="Icone Feedback" />
              <p><b>Feedback:</b> Praticamos com transparência a comunicação, buscando sempre o crescimento mútuo.</p> */}
            </div>
          </div>
        </section>

      </main>
      
    </>
  );
};

export async function getStaticProps() {
  const dadosRes = await fetchAPI("/sobre");


  const dados =  {
    title: dadosRes.data.attributes.title,
    content: dadosRes.data.attributes.content,
    image: {
      url: dadosRes.data.attributes.image.data.attributes.url,
      altText: dadosRes.data.attributes.image.data.attributes.alternativeText,
    },
    title2: dadosRes.data.attributes.title2,
    content2: dadosRes.data.attributes.content2,
    image2: {
      url: dadosRes.data.attributes.image2.data.attributes.url,
      altText: dadosRes.data.attributes.image2.data.attributes.alternativeText,
    },
    title3: dadosRes.data.attributes.title3,
    content3: dadosRes.data.attributes.content3,
    ourValues: dadosRes.data.attributes.valores,
  }

  return {
    props: {
      dados,
    },
    revalidate: 1,
  }

}



