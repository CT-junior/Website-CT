import { useState } from 'react'

import { HamburgerButton } from '../HamburgerButton'

import Styles from './styles.module.scss'

export function Header(){
    const [classMenuContent, setClassMenuContent] = useState('')
   
    function handleToggle(){
        if(classMenuContent == ''){
            setClassMenuContent('show')
        }else{
            setClassMenuContent('')
        }
    }

    return(
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <div>
                    <button onClick={handleToggle}>
                        <HamburgerButton />
                    </button>
                    <img src='/images/logoVerde.png' alt="Logo horizontal verde da CT Junior" />
                </div>
                <div className={`${Styles.menuContent} ${classMenuContent == 'show' ? Styles.menuContentShow : ''}`}>
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