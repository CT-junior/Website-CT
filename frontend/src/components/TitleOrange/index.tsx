import Styles from './style.module.scss'

type Props = {
    children: React.ReactNode
}

export function TitleOrange({children} : Props){
    return(
        <div className={Styles.title}> 
            <h2>{children}</h2>
        </div>
    )
}