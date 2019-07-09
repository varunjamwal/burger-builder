import React from 'react'
import Styles from './Toolbar.module.css'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
const toolbar = (props) => (

    <header className={Styles.Toolbar}>
        <div>MENU</div>
        <div className={Styles.Logo}>
        <Logo/>
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
)


export default toolbar;