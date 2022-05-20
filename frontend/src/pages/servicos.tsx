/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ButtonOrange } from '../components/ButtonOrange';
import { TitleOrange } from '../components/TitleOrange';
import styles from '../styles/servicos.module.scss';

interface IServices {
    title: string;
    description: string;
    image: string;
}

export default function Servicos() {
    return (
        <main className={styles.contentContainer}>

            <div className={styles.serviceArea}>
                <TitleOrange className={styles.orangeTitle}>SERVIÇOS EM TECNOLOGIA</TitleOrange>

                <div className={styles.service}>
                    <h3>WEBSITES INSTITUCIONAIS</h3>
                    <div className={styles.description}>
                        <img src="./images/website.svg" alt="Computador com um website" />
                        <p>
                            Uma importante ferramenta de comunicação e legitimidade de sua empresa na internet, feito sob medida para suprir as necessidades das empresas, seus clientes e principais interessados. Os websites da CT Junior são perfeitos para quem quer ter uma presença forte no meio digital, com otimizações de SEO e design próprio!
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>E-COMMERCES</h3>
                    <div className={styles.description}>
                        <img src="./images/ecommerce.svg" alt="Computador com um website" />
                        <p>
                            Se sua loja deseja alcançar novos clientes em âmbito nacional ou até mesmo internacional um e-commerce é o pedido certo para isso, feito sob medida para que seus clientes encontrem os produtos da forma mais fácil possível além de otimizações do SEO para que sua loja seja facilmente encontrada através de mecanismos de busca como o Google.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>SISTEMAS WEB</h3>
                    <div className={styles.description}>
                        <img src="./images/sistema.svg" alt="Computador com um website" />
                        <p>
                            Se sua empresa tem uma demanda específica nós podemos ajudar, sistemas web permitem a construção de softwares sob demanda. Não importa o desafio a CT Junior estará ao dispor com sua equipe de desenvolvimento em total contato com o cliente para trazer soluções que ataquem o problema diretamente da melhor forma possível.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>CONCEPÇÃO</h3>
                    <div className={styles.description}>
                        <img src="./images/idea.svg" alt="Computador com um website" />
                        <p>
                            Transformamos suas ideias em produtos e processos tangíveis e testáveis, através de pesquisas e métodos de design thinking a nossa equipe busca soluções que suprem as necessidades de sua empresa, negócio ou ideia da melhor forma possível. Trazendo ao fim do projeto um protótipo visual que auxilie a representar o produto final de forma concreta.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>
            </div>

            <div className={styles.serviceArea}>
                <TitleOrange className={styles.orangeTitle}>SERVIÇOS EM CIVIL</TitleOrange>

                <div className={styles.service}>
                    <h3>PROJETO ARQUITETÔNICO</h3>
                    <div className={styles.description}>
                        <img src="./images/arquitetonico.svg" alt="Projeto arquitetônico" />
                        <p>
                            Materialização do espaço imaginado pelo cliente juntamente com o profissional responsável. Tem a finalidade de prever possíveis problemas de execução e garantir que a obra saia como planejada.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>PROJETO HIDROSSANITÁRIO</h3>
                    <div className={styles.description}>
                        <img src="./images/hidrossanitario.svg" alt="Tubulaçao" />
                        <p>
                            Tem por finalidade o dimensionamento e alocação das tubulações e conexões referentes às redes de água quente, fria, esgotos e águas pluviais da edificação. Garantindo ao máximo a economia na execução, conforto e facilidade com possíveis manutenções.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>PROJETO ELÉTRICO</h3>
                    <div className={styles.description}>
                        <img src="./images/projeto_eletrico.svg" alt="Painel de luz" />
                        <p>
                            Tem por objetivo determinar a disposição e o dimensionamento dos pontos de iluminação e das tomadas, adequando-os e personalizando-os para a edificação, a fim de garantir a qualidade e a segurança nas instalações.

                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>PROJETO DE REGULARIZAÇÃO</h3>
                    <div className={styles.description}>
                        <img src="./images/regularizacao.svg" alt="Projeto regularizado" />
                        <p>
                            Apresentação de um novo projeto para a prefeitura em caso de mudanças como reformas, ampliações ou novas construções na planta original do imóvel.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>PROJETO DE CAPTAÇÃO DE ÁGUA DA CHUVA</h3>
                    <div className={styles.description}>
                        <img src="./images/captacao.svg" alt="Barris captando agua" />
                        <p>
                            Elaboramos o projeto para o redirecionamento das águas pluviais para reservatórios. Também dimensionamos todas as tubulações para a correta distribuição do volume e planejamos a disposição dos pontos de utilização para que o uso da água não potável seja prático e fácil.

                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>

                <div className={styles.service}>
                    <h3>PROJETO DE COMBATE A INCÊNDIO E PÂNICO</h3>
                    <div className={styles.description}>
                        <img src="./images/combate_incendio.svg" alt="Extintor e fogo" />
                        <p>
                            Para um Combate a Incêndio eficiente é necessário definir em projeto todos os parâmetros essenciais de modo a garantir a segurança e tranquilidade do estabelecimento e seus usuários, através do dimensionamento e/ou adequação dos equipamentos e das instalações capazes de prevenir, combater e permitir a evacuação de presentes em situações de incêndio.
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <ButtonOrange><Link href="/contato">Contate um consultor</Link></ButtonOrange>
                    </div>
                </div>
            </div>

        </main>
    )
}