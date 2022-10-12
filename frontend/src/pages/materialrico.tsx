import Head from "next/head";

import { TitleOrange } from "../components/TitleOrange";
import { ButtonOrange } from "../components/ButtonOrange";

import Styles from "../styles/materialrico.module.scss";
import { Icons } from "react-toastify";

export default function MaterialRico() {
  return (
    <main>
      <Head>
        <title>Material Rico | CT JUNIOR</title>
      </Head>
      <section className={Styles.container}>
        <TitleOrange>MATERIAL RICO</TitleOrange>
        <p>Aproveite nosso contúdo gratuito disponível para download</p>
        <div className={Styles.materialCards}>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/IndicadoresFinanceiros.png" alt="" />
            <span>
              Indicadores Financeiros: dicas para implementar em sua empresa
            </span>
            <ButtonOrange href="https://empresa.ctjunior.com.br/dicas-para-implementar-indicadores-financeiros-em-sua-empresa" target="_blank" >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/Eccomerce.jpg" alt="" />
            <span>Conheça o E-commerce feito pela CT</span>
            <ButtonOrange href="https://empresa.ctjunior.com.br/conheca-ecommerce-feito-pela-ct" target="_blank">Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/ProjetoEletrico.png" alt="" />
            <span>Entendendo as etapas de um projeto elétrico</span>
            <ButtonOrange href="https://empresa.ctjunior.com.br/ebook-entendendo_as_etapas_de_um_projeto_eletrico" target="_blank">Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/materialRico.png" alt="" />
            <span>
              Planejamento estratégico: alcance resultados incríveis com essa
              ferramenta
            </span>
            <ButtonOrange href="https://empresa.ctjunior.com.br/ebook-planejamento-estrategico" target="_blank">Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/plangastos.png" alt="" />
            <span>Planilha de gestão de gastos</span>
            <ButtonOrange href="https://empresa.ctjunior.com.br/planilha-gestao-de-gastos" target="_blank"> Baixar</ButtonOrange>
          </div>
        </div>
      </section>
    </main>
  );
}
