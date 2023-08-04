import { FC, RefObject } from 'react';
import illustrationWorking from '../../assets/illustration-working.svg';
import './Hero.scss';

interface HeroProps {
    inputRef: RefObject<HTMLInputElement>;
}

const Hero: FC<HeroProps> = ({ inputRef }) => {
    const handleClick = () => inputRef.current?.focus();

    return (
        <div className="hero">
            <div className="text">
                <h1 className="title">More than just shorter links</h1>
                <p className="description">
                    Build your brand’s recognition and get detailed insights on how your links are
                    performing.
                </p>
                <button className="start" onClick={handleClick}>
                    Get Started
                </button>
            </div>
            
            <img src={illustrationWorking} alt="Working" className="image" />
        </div>
    );
};

export default Hero;
