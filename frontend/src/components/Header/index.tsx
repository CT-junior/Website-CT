/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Link from 'next/link';
import Styles from './styles.module.scss'

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

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
                        <Link href='/'><a>Início</a></Link>
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