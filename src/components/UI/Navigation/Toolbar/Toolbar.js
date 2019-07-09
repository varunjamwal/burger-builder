import React from 'react'
import Styles from './Toolbar.module.css'
import Logo from '../../../Logo/Logo'
const toolbar = (props) => (

    <header className={Styles.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            ...
        </nav>
    </header>
)


export default toolbar;