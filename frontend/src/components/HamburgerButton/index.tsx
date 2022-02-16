import Styles from './styles.module.scss'
import { useState } from 'react'

export function HamburgerButton(){
    const [classNavMenu, setClassNavMenu] = useState('closed');

    function handleToggle(){
        if(classNavMenu == 'closed'){
            setClassNavMenu('')
        }else{
            setClassNavMenu('closed')
        }
    }

    return(
        <div  
            className={`${Styles.bar} ${classNavMenu == 'closed' ? "" : Styles.menuHamburgerOpen}`} 
            onClick={handleToggle}
        >
            <span className={Styles.top}></span>
            <span className={Styles.middle}></span>
            <span className={Styles.bottom}></span>
        </div>
    )
}