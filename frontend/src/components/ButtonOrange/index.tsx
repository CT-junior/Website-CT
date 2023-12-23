import Styles from './styles.module.scss'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    href?: string,
    target?: string,
}

export function ButtonOrange({ target, href, children, ...props }: ButtonProps) {
    return (
        <a href={href} target={target}>
            <button className={Styles.button} {...props}>
                {children}
            </button>
        </a>
    )
}

export function ButtonOrangeDisplay({ target, href, children, ...props }: ButtonProps) {
    return (
        <a href={href} target={target}>
            <button className={Styles.buttonDisplay} {...props}>
                {children}
            </button>
        </a>
    )
}