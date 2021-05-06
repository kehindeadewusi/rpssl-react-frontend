import style from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import React from 'react';

const NavigationItems = (props) => {
    let items = <React.Fragment>
            <NavigationItem link="/" exact>Game</NavigationItem>
            <NavigationItem link="/multi">Multi-player</NavigationItem>
            <NavigationItem link="/scoreboard">Scoreboard</NavigationItem>
        </React.Fragment>

    return (
        <ul className={style.NavigationItems}>
            {items}
        </ul>
    );
}

export default NavigationItems;
