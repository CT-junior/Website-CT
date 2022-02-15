import Styles from './styles.module.scss'

export function Header(){
    return(
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>

                <img src='/images/logoVerde.png' alt="" />
                <div>

                </div>
            </div>

        </header>
    )
}