import { useState } from 'react'
import Link from 'next/link';
import Styles from './styles.module.scss'

export function Header(){

    const [classHamburgerButton, setClassHamburgerButton] = useState('closed');

    function handleHamburgerNavMenu(){
        if(classHamburgerButton == 'closed'){          
            setClassHamburgerButton('open')

        }else{           
            setClassHamburgerButton('closed')

        }
    }
    return(
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <div>
                    <button  
                        className={`${Styles.hamburgerMenu} ${classHamburgerButton == 'open' ?  Styles.menuHamburgerOpen : '""'}`} 
                        onClick={handleHamburgerNavMenu}
                    >
                        <span className={Styles.top}></span>
                        <span className={Styles.middle}></span>
                        <span className={Styles.bottom}></span>
                    </button>
                    <Link href='/'><img src='/images/logoVerde.png' alt="Logo horizontal verde da CT Junior" /></Link>
                </div>
                <div className={`${Styles.menuContent} ${classHamburgerButton == 'open' ? Styles.menuContentShow : ''}`}>
                    <nav>
                        <Link href='/servicos'><a>Serviços</a></Link>
                        <Link href='/sobrenos'><a>Quem Somos</a></Link>
                        <Link href='/portfolio'><a>Portfólio</a></Link>
                        <Link href='/contato'><a>Contato</a></Link>
                        <Link href='/materialrico'><a>Material Rico</a></Link>
                    </nav>
                </div>
                
            </div>

        </header>
    )
}