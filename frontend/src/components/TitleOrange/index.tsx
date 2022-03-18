import Styles from './styles.module.scss'

type Props = {
    children: React.ReactNode;
    className?: string;
}

export function TitleOrange({children, className} : Props){
    return(
        <div className={`${Styles.title} ${className}`}> 
            <h2>{children}</h2>
            <span></span>
        </div>
    )
}