import styles from './Navbar.module.css'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHelmetSafety, faNewspaper, faContactBook, faList, faList12} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { toHaveClass } from '@testing-library/jest-dom/matchers'

function Navbar() {

    const [menuActive, setMenuActive] = useState('home')
    

    return (<div className={styles.navegacao}>
    <ul>
        
        <li className={menuActive ==='home' ? 'Navbar_active__EouiZ' : ""} onClick={() => setMenuActive('home')}>
            
            <a href="#">
                <span className={styles.icon}><FontAwesomeIcon icon={faHouse} /></span>
                <span className={styles.text} id='home'>home</span>
                <span className={styles.circle}></span>
            </a>
        </li>
        
        <li  className={menuActive ==='active' ? 'Navbar_active__EouiZ' : ""} onClick={() => setMenuActive('active')} > 
             
                <a href="#">
                    <span className={styles.icon}><FontAwesomeIcon icon={faHelmetSafety} /></span>
                    <span className={styles.text}>Obras</span>
                    <span className={styles.circle}></span>
                </a>
            </li>
            
            <li className={menuActive ==='project' ? 'Navbar_active__EouiZ' : ""} onClick={() => setMenuActive('project')}  >
                <a href="#">
                    <span className={styles.icon}><FontAwesomeIcon icon={faNewspaper} /></span>
                    <span className={styles.text}>Projetos</span>
                    <span className={styles.circle}></span>
                </a>
            </li>

            <li className={menuActive ==='Contatos' ? 'Navbar_active__EouiZ' : ""} onClick={() => setMenuActive('Contatos')}  >
                <a href="#">
                    <span className={styles.icon}><FontAwesomeIcon icon={faContactBook} /></span>
                    <span  className={styles.text}>Contatos</span>
                    <span className={styles.circle}></span>
                </a>
            </li>

            <li className={menuActive ==='Mais' ? 'Navbar_active__EouiZ' : ""} onClick={() => setMenuActive('Mais')} >
                <a href="#">
                    <span className={styles.icon}><FontAwesomeIcon icon={faList} /></span>
                    <span  className={styles.text}>Mais</span>
                    <span className={styles.circle}></span>
                </a>
            </li>
           

            <div className={styles.indicador}>

            </div>

      
        </ul>
    </div>
    )


}

export default Navbar