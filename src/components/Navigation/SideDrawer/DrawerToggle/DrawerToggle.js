import style from './DrawerToggle.module.css';

const DrawerToggle = (props)=>(
    <div className={style.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;
