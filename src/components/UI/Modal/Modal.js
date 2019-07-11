import React,{useEffect} from 'react'
import Styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = React.memo(
    props => {    
        useEffect(() => console.log('it did update')); 
    return(
    <React.Fragment>
        <Backdrop show = {props.show} clicked={props.modalClosed}/>
    <div className={Styles.Modal}
    style={{
        transform : props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity : props.show ? '1' : '0'
    }}>
        {props.children}
    </div>
    </React.Fragment>
    )
}, (prevProps, nextProps) => prevProps.show === nextProps.show
);

export default modal;