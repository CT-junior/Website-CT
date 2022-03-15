import Styles from './styles.module.scss';

export function Footer(){
    return(
        <footer className={Styles.footerContainer}>


            <section className={Styles.newsletterContainer}>
                <div className={Styles.newsletterContent}>
                    <div className={Styles.newsletterTitle}>
                        <h2>Quer receber<br/>nossos conteúdos?</h2>
                    </div>

                    <form className={Styles.newsletterForm}>
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" placeholder="Nome" required />

                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email" placeholder="E-mail" required />

                        <div className={Styles.newsletterButton}>
                            <button type="submit">Assinar Newsletter</button>
                        </div>
                    </form>
                    
                </div>
            </section>
            

            <img className={Styles.footerLogo} src='./images/logoBranca.png' alt="Logo da Empresa" />
            <ul>
                <li>Início</li>
                <li>Quem Somos</li>
                <li>Portfólio</li>
                <li>Contato</li>
                <li>Material</li>
            </ul>

            <div className={Styles.footerEmail}>
                <img src="./images/email.svg" alt="icon do e-mail" />
                <p>contato@ctjunior.com.br</p>
            </div>
            <div className={Styles.footerTelephone}>
                <img src="./images/telefone.svg" alt="icon de telefone" />
                <p>(27) 3335-2680 / (28) 99994-7373</p>
            </div>
            
            <div className={Styles.footerSocials}>
                <p>Acompanhe-nos!</p>
                <div>
                    <a href="https://www.instagram.com/ctjuniorufes/">
                        <img src="./images/instaLogo.svg" alt="logo instagram" />
                    </a>
                    <a href="https://www.facebook.com/ufesctjunior/">
                        <img src="./images/faceLogo.svg" alt="logo facebook" />
                    </a>
                    <a href="https://www.linkedin.com/company/ct-junior/">
                        <img src="./images/linkedinLogo.svg" alt="logo linkedin" />
                    </a>
                </div>
                
            </div>

        </footer>
    )
}