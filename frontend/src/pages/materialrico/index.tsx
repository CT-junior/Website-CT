import Head from "next/head";

import { TitleOrange } from "../../components/TitleOrange";
import { ButtonOrange } from "../../components/ButtonOrange";

import Styles from "./styles.module.scss";
export default function MaterialRico() {
  return (
    <main>
       <Head>
        <title>Material Rico 
          | CT JUNIOR</title>
      </Head>
      <section className={Styles.container}>
        <TitleOrange>MATERIAL RICO</TitleOrange>
        <p>Aproveite nosso contúdo gratuito disponível para download</p>
        <div className={Styles.materialCard}>
            <img src="/images/materialRico.png" alt="" />
            <span>Indicadores Financeiros: dicas para implementar em sua empresa</span>
            <ButtonOrange> Baixar</ButtonOrange>
        </div>
        <div className={Styles.materialCard}>
            <img src="/images/materialRico.png" alt="" />
            <span>Conheça o E-commerce feito pela CT</span>
            <ButtonOrange> Baixar</ButtonOrange>
        </div>
        <div className={Styles.materialCard}>
            <img src="/images/materialRico.png" alt="" />
            <span>Entendendo as etapas de um projeto elétrico</span>
            <ButtonOrange> Baixar</ButtonOrange>
        </div>
        <div className={Styles.materialCard}>
            <img src="/images/materialRico.png" alt="" />
            <span>Planejamento estratégico: alcance resultados incríveis com essa ferramenta</span>
            <ButtonOrange> Baixar</ButtonOrange>
        </div>
        <div className={Styles.materialCard}>
            <img src="/images/plangastos.png" alt="" />
            <span>Planilha de gestão de gastos</span>
            <ButtonOrange> Baixar</ButtonOrange>
        </div>
        
      </section>
      
    </main>
  );
}
