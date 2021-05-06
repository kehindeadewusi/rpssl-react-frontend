import React from 'react';
import style from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props)=>{
    let assignedClasses = [style.SideDrawer, style.Close];
    if(props.open){
        assignedClasses = [style.SideDrawer, style.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={assignedClasses.join(' ')} onClick={props.closed}>
                <div className={style.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuthenticated}/>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default SideDrawer;