/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <section className={styles.newsletterContainer}>
                    <div className={styles.newsletterContent}>
                        <div className={styles.newsletterTitle}>
                            <h2>Quer receber<br />nossos conteúdos?</h2>
                        </div>

                        <form className={styles.newsletterForm}>
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" placeholder="Nome" required />

                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" placeholder="E-mail" required />

                            <div className={styles.newsletterButton}>
                                <button type="submit">Assinar Newsletter</button>
                            </div>
                        </form>


                    </div>
                </section>

                <img className={styles.footerLogo} src='./images/logoBranca.png' alt="Logo da Empresa" />
                <nav className={styles.links}>
                    <ul>
                        <li><Link href='/'>Início</Link></li>
                        <li><Link href='/sobrenos'>Quem Somos</Link></li>
                        <li><Link href='/portfolio'>Portfólio</Link></li>
                        <li><Link href='/contato'>Contato</Link></li>
                        <li><Link href='/materialrico'>Material</Link></li>
                    </ul>
                </nav>

                <div className={styles.contact}>
                    <div className={styles.footerEmail}>
                        <img src="./images/email.svg" alt="icon do e-mail" />
                        <p>contato@ctjunior.com.br</p>
                    </div>
                    <div className={styles.footerTelephone}>
                        <img src="./images/telefone.svg" alt="icon de telefone" />
                        <p>(27) 3335-2680</p>
                        <p>(28) 99994-7373</p>
                    </div>
                </div>

                <div className={styles.footerSocials}>
                    <p>Acompanhe-nos!</p>
                    <div>
                        <a target="_blank" href="https://www.instagram.com/ctjuniorufes/" rel="noopener noreferrer">
                            <img src="./images/instaLogo.svg" alt="logo instagram" />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/ufesctjunior/" rel="noopener noreferrer">
                            <img src="./images/faceLogo.svg" alt="logo facebook" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/ct-junior/" rel="noopener noreferrer">
                            <img src="./images/linkedinLogo.svg" alt="logo linkedin" />
                        </a>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>
                        Feito com ❤️ por CT Junior
                    </p>

                    <a target="_blank" href="https://vercel.com/?utm_source=ct-junior&utm_campaign=oss" rel="noopener noreferrer">
                        <img src="./images/vercelPowered.svg" alt="Powered by Vercel" />
                    </a>
                </div>
            </div>
        </footer>
    )
}