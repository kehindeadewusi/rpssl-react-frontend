import logo from '../../assets/images/logo.png';
import style from './Logo.module.css';

const Logo = ()=>(
    <div className={style.Logo}>
        <img src={logo} alt="Burger Logo"/>
    </div>
);

export default Logo;