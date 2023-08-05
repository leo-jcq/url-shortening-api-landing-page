import { FC } from 'react';
import illustrationWorking from '../../assets/illustration-working.svg';
import './Hero.scss';

const Hero: FC = () => {
    return (
        <div className="hero">
            <div className="text">
                <h1 className="title">More than just shorter links</h1>
                <p className="description">
                    Build your brand’s recognition and get detailed insights on how your links are
                    performing.
                </p>
                <label htmlFor="linkInput" className="start">
                    Get Started
                </label>
            </div>

            <img src={illustrationWorking} alt="Working" className="image" />
        </div>
    );
};

export default Hero;
