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
      </section>
    </main>
  );
}