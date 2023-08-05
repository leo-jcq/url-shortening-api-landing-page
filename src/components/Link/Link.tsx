import { FC, useState } from 'react';
import './Link.scss';

interface LinkProps {
    link: Link;
}

const Link: FC<LinkProps> = ({ link }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleClick = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(link.shorten);
    };

    return (
        <div className="link">
            <span className="original">{link.original}</span>

            <div className="right">
                <span className="shorten">{link.shorten}</span>
                <button className={`copy${isCopied ? ' copied' : ''}`} onClick={handleClick}>
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default Link;
