import React from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import Styles from './Layout.module.css'
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'
const layout = (props) => {
   
    return (
        <React.Fragment>
   <Toolbar />
   <SideDrawer />
    <main className={Styles.content}>
        {props.children}
    </main>
    </React.Fragment>
    )
}

export default layout;