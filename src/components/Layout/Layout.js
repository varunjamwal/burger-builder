import React from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar'
import Styles from './Layout.module.css'
const layout = (props) => {
   
    return (
        <React.Fragment>
   <Toolbar />
    <main className={Styles.content}>
        {props.children}
    </main>
    </React.Fragment>
    )
}

export default layout;