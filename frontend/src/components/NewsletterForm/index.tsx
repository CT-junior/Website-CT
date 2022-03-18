import styles from './styles.module.scss';

export function NewsletterForm(){
    return(
        <section className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
                <div className={styles.newsletterTitle}>
                    <h2>Quer receber<br />nossos conteúdos?</h2>
                </div>

                <form className={styles.newsletterForm} action="javascript:void(0)" method="post">
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
    )
}