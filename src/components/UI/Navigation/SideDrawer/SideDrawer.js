import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Styles from './SideDrawer.module.css'
import Backdrop from '../../Backdrop/Backdrop'
const sideDrawer = (props) =>{

    let attachedClasses = [Styles.SideDrawer, Styles.Close]
    if (props.open){
        attachedClasses = [Styles.SideDrawer, Styles.Open]
    }
return(

    <React.Fragment>
    <Backdrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses.join(' ')}>
        <div className={Styles.Logo} >
         <Logo/>
         </div>
        <nav>
            <NavigationItems />
        </nav>
    </div> 
    </React.Fragment>
);
 };

 export default sideDrawer;