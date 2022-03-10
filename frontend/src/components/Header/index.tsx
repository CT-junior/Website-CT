import { useState } from 'react'
import Link from 'next/link';
import Styles from './styles.module.scss'

import { useRouter } from 'next/router';

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    
    const query = useRouter().asPath.replace('/', '');

    return (
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <div>
                    <button
                        className={`${Styles.hamburgerMenu} ${menuOpen == true ? Styles.menuHamburgerOpen : ''}`}
                        onClick={() => { setMenuOpen(!menuOpen) }}
                    >
                        <span className={Styles.top}></span>
                        <span className={Styles.middle}></span>
                        <span className={Styles.bottom}></span>
                    </button>
                    <Link href='/' passHref>
                        <img onClick={() => { setMenuOpen(false) }} src='/images/logoverde.png' alt="Logo horizontal verde da CT Junior" />
                    </Link>
                </div>
                <div className={`${Styles.menuContent} ${menuOpen == true ? Styles.menuContentShow : ''}`}>
                    <nav onClick={() => { setMenuOpen(false) }}>
                        <Link href='/sobrenos'><a className={`${query == 'sobrenos' ? Styles.active : "" }`}>Quem Somos</a></Link>
                        <Link href='/servicos'><a className={`${query == 'servicos' ? Styles.active : "" }`}>Serviços</a></Link>
                        <Link href='/portfolio'><a className={`${query == 'portfolio' ? Styles.active : "" }`}>Portfólio</a></Link>
                        <Link href='/materialrico'><a className={`${query == 'materialrico' ? Styles.active : "" }`}>Material Rico</a></Link>
                        <Link href='/contato'><a className={`${query == 'contato' ? Styles.active : "" }`}>Contato</a></Link>

                    </nav>
                </div>

            </div>

        </header>
    )
}