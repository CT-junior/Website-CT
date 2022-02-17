import { useState } from 'react'

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
                    <img src='/images/logoVerde.png' alt="Logo horizontal verde da CT Junior" />
                </div>
                <div className={`${Styles.menuContent} ${classHamburgerButton == 'open' ? Styles.menuContentShow : ''}`}>
                    <nav>
                        <a href="#">Serviços</a>
                        <a href="#">Quem Somos</a>
                        <a href="#">Portfólio</a>
                        <a href="#">Contato</a>
                        <a href="#">Material Rico</a>
                    </nav>
                </div>
                
            </div>

        </header>
    )
}