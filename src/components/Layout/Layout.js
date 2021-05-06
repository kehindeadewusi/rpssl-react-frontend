import React, {useState} from 'react';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = ()=>{
        setShowSideDrawer(!showSideDrawer);
    }

    return <>
        <Toolbar 
            drawerToggleClicked={sideDrawerToggleHandler}
        />
        <SideDrawer 
            open={showSideDrawer} 
            closed={sideDrawerClosedHandler}
        />
        <main className={style.Content}>
            {props.children}
        </main>
        {/* <div>Footer</div> */}
    </>;
}

const mapStateToProps = state =>{
    return {
        
    };
};

export default connect(mapStateToProps)(Layout);
