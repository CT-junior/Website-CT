import Head from "next/head";
import { TellUsForm } from "../components/TellUsForm";

import { TitleOrange } from "../components/TitleOrange";

import Styles from "../styles/contato.module.scss";

export default function Contato(){
    return(
        <>
            <Head>
                <title>Contato | CT JUNIOR</title>
            </Head>

            <main>
                <section className={Styles.tellUsContainer}>
                    <div className={Styles.tellUsContent}>
                        <TitleOrange>Nos conte sua ideia!</TitleOrange>
                        <TellUsForm />
                    </div>
                    
                </section> 

                <section className={Styles.ourLocationContainer}>
                    <div className={Styles.ourLocationContent}>
                        <TitleOrange>Nossa localização</TitleOrange>
                        <p>
                            Centro Tecnológico - UFES - Goiabeiras
                            <br/>
                            Vitória - ES, 29075-010
                            <br/>
                            Atendimento: segunda à sexta, de 8h às 17h
                        </p>
                    </div> 
                </section>   
                <div className={Styles.ourLocationMap}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6877903790064!2d-40.30761488453347!3d-20.271779054264332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81806441d0d27%3A0x12a0558433257e4d!2sCT%20Junior%20-%20Consultoria%20em%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1646866297582!5m2!1spt-BR!2sbr" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>

            </main>
        </>
    );
};