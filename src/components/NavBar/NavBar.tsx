import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useRef, useState } from 'react';
import './NavBar.scss';

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openBtnRef = useRef<HTMLButtonElement>(null);
    const navListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !openBtnRef.current?.contains(e.target as Node) &&
                !navListRef.current?.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className={`navBar${isOpen ? ' open' : ''}`}>
            <button
                className="open"
                onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
                ref={openBtnRef}>
                <FontAwesomeIcon icon={faBars} color="#35323e" />
            </button>

            <div className="navList" ref={navListRef}>
                <div className="navContainer left">
                    <a className="navItem">Features</a>
                    <a className="navItem">Pricing</a>
                    <a className="navItem">Ressources</a>
                </div>

                <hr className="separator" />

                <div className="navContainer right">
                    <a className="navItem">Login</a>
                    <a className="navItem singUp">Sing Up</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
