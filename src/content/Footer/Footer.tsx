import { FC } from 'react';
import {
    iconFacebook,
    iconInstagram,
    iconPinterest,
    iconTwitter,
    logo
} from '../../constants/icons';
import './Footer.scss';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="logo">{logo}</div>

            <div className="blocks">
                <div className="block">
                    <span className="blockTitle">Features</span>
                    <a className="anchor" href="#">
                        Link Shortening
                    </a>
                    <a className="anchor" href="#">
                        Branded Links
                    </a>
                    <a className="anchor" href="#">
                        Analytics
                    </a>
                </div>

                <div className="block">
                    <span className="blockTitle">Ressources</span>
                    <a className="anchor" href="#">
                        Blog
                    </a>
                    <a className="anchor" href="#">
                        Developers
                    </a>
                    <a className="anchor" href="#">
                        Support
                    </a>
                </div>

                <div className="block">
                    <span className="blockTitle">Company</span>
                    <a className="anchor" href="#">
                        About
                    </a>
                    <a className="anchor" href="#">
                        Our Team
                    </a>
                    <a className="anchor" href="#">
                        Careers
                    </a>
                    <a className="anchor" href="#">
                        Contact
                    </a>
                </div>

                <div className="block social">
                    <a className="anchor" href="https://facebook.com">
                        {iconFacebook}
                    </a>
                    <a className="anchor" href="https://twitter.com">
                        {iconTwitter}
                    </a>
                    <a className="anchor" href="https://pinterest.com">
                        {iconPinterest}
                    </a>
                    <a className="anchor" href="https://instagram.com">
                        {iconInstagram}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
