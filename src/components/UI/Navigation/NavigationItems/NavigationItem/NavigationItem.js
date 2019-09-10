import React from 'react'
import Styles from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom'

const navigationItem = (props) => (
    <li className={Styles.navigationItem}>
        <NavLink to={props.link} activeClassName={Styles.active} exact={props.exact}>{props.children}</NavLink>
    </li>
);

export default navigationItem
