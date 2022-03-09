import Styles from './styles.module.scss'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    children: React.ReactNode
}

export function ButtonOrange({children, ...props} : ButtonProps){
    return(
        <button className={Styles.button} {...props}>
            {children}
        </button>
    )
}