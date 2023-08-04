import { FC } from 'react';
import logo from '../../assets/logo.svg';
import './Header.scss';
import NavBar from '../../components/NavBar/NavBar';

const Header: FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="Shortly" className="logo" />

            <NavBar />
        </header>
    );
};

export default Header;
