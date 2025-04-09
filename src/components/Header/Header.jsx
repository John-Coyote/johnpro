import { Button } from '../Button/Button';
import cls from './Header.module.css';
import ReactLogo from '../../assets/react.svg';



function Header() {
    return (<header className={cls.header}>
        <p>
            <img src={ReactLogo} alt="react logo" />
            <span>ReactCards</span>
        </p>
        <div className={cls.headerButtons}>
            <Button isActive>Add</Button>
            <Button>Login</Button>

        </div>
    </header>);
}

export default Header;