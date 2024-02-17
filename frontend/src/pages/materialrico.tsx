/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

import { TitleOrange } from "../components/TitleOrange";
import { ButtonOrange } from "../components/ButtonOrange";

import Styles from "../styles/materialrico.module.scss";
import { Icons } from "react-toastify";

export default function MaterialRico() {

  const handleClick = (key: string) => {
    localStorage.setItem('ebook_key', key);
    window.location.href = '/ebookdownload';
  }

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
            <ButtonOrange onClick={() => handleClick("indicadores_financeiros")} >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/Eccomerce.jpg" alt="" />
            <span>Conheça o E-commerce feito pela CT</span>
            <ButtonOrange onClick={() => handleClick("ecommerce")} >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/ProjetoEletrico.png" alt="" />
            <span>Entendendo as etapas de um projeto elétrico</span>
            <ButtonOrange onClick={() => handleClick("projeto_eletrico")} >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/materialRico.png" alt="" />
            <span>
              Planejamento estratégico: alcance resultados incríveis com essa
              ferramenta
            </span>
            <ButtonOrange onClick={() => handleClick("planejamento_estrategico")} >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/plangastos.png" alt="" />
            <span>Planilha de gestão de gastos</span>
            <ButtonOrange onClick={() => handleClick("planilha_gestao_gastos")} >Baixar</ButtonOrange>
          </div>
          <div className={Styles.materialCard}>
            <img src="/images/material_rico/ProjetosArquitetonicos.jpg" alt="" />
            <span>Projeto arquitetônico: otimize seu tempo e reduza o caminho até seu projeto dos sonhos!</span>
            <ButtonOrange onClick={() => handleClick("projeto_arquitetonico")} >Baixar</ButtonOrange>
          </div>
        </div>
      </section>
    </main>
  );
}
