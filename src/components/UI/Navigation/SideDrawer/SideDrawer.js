import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Styles from './SideDrawer.module.css'
const sideDrawer = (props) =>{

return(

    <div className={Styles.SideDrawer}>
        <div className={Styles.Logo}>
         <Logo/>
         </div>

        <nav>
            <NavigationItems />
        </nav>
    </div>

);
 };

 export default sideDrawer;