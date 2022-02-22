import { NextPage } from "next";
import Head from "next/head";

import Styles from "../styles/home.module.scss";

const SobreNosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre Nós | CT JUNIOR</title>
      </Head>

      <main>
        <section className={Styles.aboutUsContainer}>
          <div className={Styles.aboutUsContent}>
            <div className={Styles.aboutUsTitle}>
              <h2>Um pouco sobre nós</h2>
            </div>
            <p>
              A CT Junior é uma empresa sem fins lucrativos, formada por alunos do Centro Tecnológico da Universidade Federal do Espírito Santo, que trabalham voluntariamente e buscam promover o empreendedorismo no ecossistema capixaba e impactar a sociedade por meio de projetos de excelência com o melhor custo-benefício.
              <br/>
              <br/>
              Fundada em 1993, e federada em 2008 pela Juniores. Atuamos no mercado há 26 anos e nossa carta de serviços engloba as áreas de consultoria empresarial, construção civil e tecnologia da informação. Todo o valor adquirido pela empresa é revertido em investimentos para a formação profissional dos nossos membros e alunos da UFES.
            </p>
            <img src="" alt="" />
          </div>  
        </section>

        <section className={Styles.ourAwardsContainer}>
          <div className={Styles.ourAwardsContent}>
            <div className={Styles.ourAwardsTitle}>
              <h2>Nossa premiações</h2>
            </div>
            <ul>
              <li>Em 2015 ganhamos o prêmio de melhor case no Encontro Nacional de Empresas Juniores;</li>
              <li>Em 2016, pela nossa federação Juniores, ganhamos o prêmio de Impacto na Rede;</li>
              <li>Em 2018 voltamos a ser a empresa Impacto na Rede, mas dessa vez levamos também o prêmio de Vendedor do Ano;</li>
              <li>Em 2020, conquistamos os títulos de Alto Crescimento e Conectada;</li>
              <li>Em 2021, fomos reconhecidos no Evento Nacional de Empresas Juniores e ainda pretendemos alcançar vôos mais altos.</li>
            </ul>

            <img src="" alt="" />
          </div>
        </section>

        <section className={Styles.ourBelievingsContainer}>
          <div className={Styles.ourBelievingsContent}>
            <div className={Styles.ourBelievingsTitle}>
              <h2>No que acreditamos</h2>
            </div>
            <div>
              <h2>Missão</h2>
              <p>Executar projetos de excelência para nossos clientes, contribuindo com o desenvolvimento dos estudantes do centro tecnológico por meio da vivência empresarial.</p>

              <h2>Visão</h2>
              <p>Ser uma empresa referência no mercado brasileiro, formando jovens líderes empreendedores que geram grandes resultados por meio dos seus projetos de excelência.</p>

              <h2>Propósito</h2>
              <p>Transformar pessoas em líderes empreendedores de valores sólidos que são capazes e comprometidos em impactar a sociedade.</p>
            </div>
          </div>
        </section>

        <section className={Styles.ourValuesContainer}>
          <div className={Styles.ourValuesContent}>
            <div className={Styles.ourValuesTitle}>
              <h2>Nossos valores</h2>
            </div>
            <img src="" alt="" />
            <p><b>Foco em resultados:</b> Buscamos incessantemente a geração de valor para nossos clientes, com foco na qualidade, satisfação e no desenvolvimento de nossos produtos e colaboradores.</p>

            <img src="" alt="" />
            <p><b>Espirito de dono:</b> Pensamos e agimos como donos, zelando pela nossa instituição. Estamos cientes que somos os únicos responsáveis pelos nossos resultados.</p>

            <img src="" alt="" />
            <p><b>Empatia:</b> Respeitamos e compreendemos as diferenças, valorizamos as pessoas e nos preocupamos com seu bem estar.</p>

            <img src="" alt="" />
            <p><b>Profissionalismo:</b> Agimos com ética, responsabilidade e comprometimento com nossos resultados.</p>

            <img src="" alt="" />
            <p><b>Feedback:</b> Praticamos com transparência a comunicação, buscando sempre o crescimento mútuo.</p>
          </div>
        </section>

      </main>
    </>
  );
};

export default SobreNosPage;
