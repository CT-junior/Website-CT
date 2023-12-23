import { useState } from 'react'
import Link from 'next/link';
import Styles from './styles.module.scss'

import { ActiveLink } from '../ActiveLink';

export function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <div className={Styles.header}>
                    <button
                        className={`${Styles.hamburgerMenu} ${menuOpen == true ? Styles.menuHamburgerOpen : ''}`}
                        onClick={() => { setMenuOpen(!menuOpen) }}
                    >
                        <span className={Styles.top}></span>
                        <span className={Styles.middle}></span>
                        <span className={Styles.bottom}></span>
                    </button>
                    <Link href='/' passHref>
                        <img onClick={() => { setMenuOpen(false) }} src='/images/Logo_CT_Verde.svg' alt="Logo horizontal verde da CT Junior" />
                    </Link>
                </div>
                <div className={`${Styles.menuContent} ${menuOpen == true ? Styles.menuContentShow : ''}`}>
                    <nav onClick={() => { setMenuOpen(false) }}>
                        <ActiveLink href='/sobrenos' activeClassName={Styles.active}>
                            <a>Quem Somos</a>
                        </ActiveLink>
                        <ActiveLink href='/servicos' activeClassName={Styles.active}>
                            <a>Serviços</a>
                        </ActiveLink>
                        <ActiveLink href='/portfolio' activeClassName={Styles.active}>
                            <a>Portfólio</a>
                        </ActiveLink>
                        {/* <ActiveLink href='/materialrico' activeClassName={Styles.active}>
                            <a>Material Rico</a>
                        </ActiveLink> */}
                        <ActiveLink href='/contato' activeClassName={Styles.active}>
                            <a>Contato</a>
                        </ActiveLink>
                    </nav>
                </div>

            </div>

        </header>
    )
}