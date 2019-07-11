import React,{useState} from 'react';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar'
import Styles from './Layout.module.css'
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer'

const Layout = props => {
   
    const [side,changeDrawer] = useState({

        showSideDrawer : false
    }
    );

    const sideDrawerClosedHandler = () =>{

        changeDrawer({
            showSideDrawer : false
        })
    }
    const sideDrawerOpenHandler = () =>{

        changeDrawer({
            showSideDrawer : true
        })
    }
    return (
        <React.Fragment>
   <Toolbar opened={sideDrawerOpenHandler} />
   <SideDrawer open = {side.showSideDrawer} closed={sideDrawerClosedHandler} />
    <main className={Styles.content}>
        {props.children}
    </main>
    </React.Fragment>
    )
}

export default Layout;