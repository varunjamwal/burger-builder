import React from 'react'
import burgerLogo from '../../assets/Images/burger-logo.png'
import Styles from './Logo.module.css'
const Logo = (props) =>(

    <div className={Styles.Logo} style={{height : props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default Logo;