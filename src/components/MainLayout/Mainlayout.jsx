import { Outlet } from 'react-router-dom';
import cls from './MainLayout.module.css';
import  Header  from '../Header/Header';

function MainLayout() {

    const currentYear = new Date().getFullYear();
    return (
        <div className={cls.mainLayout}>
            <Header />
            <div className={cls.mainWrapper}>
                <Outlet />
                <main className={cls.main}>Main</main>
                <footer className={cls.footer}>
                    React Question Cards Application | {currentYear} <br/>
                    by John Nosach
                </footer>
            </div>
        </div>
      );
}

export default MainLayout;