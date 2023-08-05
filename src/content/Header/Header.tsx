import { FC } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { logo } from '../../constants/icons';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <div className="logo">{logo}</div>

            <NavBar />
        </header>
    );
};

export default Header;
