import React from 'react';
import Styles from './Layout.module.css'
const layout = (props) => {
   
    return (
        <React.Fragment>
   <div>
        Toolbar, Sidebar , Backdrop
    </div>
    <main className={Styles.content}>
        {props.children}
    </main>
    </React.Fragment>
    )
}

export default layout;