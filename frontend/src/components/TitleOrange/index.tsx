import Styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}

export function TitleOrange({children} : Props){
    return(
        <div className={Styles.title}> 
            <h2>{children}</h2>
            <span></span>
        </div>
    )
}