import { FC } from 'react';
import './Header.scss';
import NavBar from '../../components/NavBar/NavBar';
import { logo } from '../../constants/icons';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="logo">{logo}</div>

            <NavBar />
        </header>
    );
};

export default Header;
