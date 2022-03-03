import Styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}

export function ButtonOrange({children} : Props){
    return(
        <button className={Styles.button}>
            {children}
        </button>
    )
}