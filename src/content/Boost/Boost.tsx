import { FC } from 'react';
import './Boost.scss';

const Boost: FC = () => {
    return (
        <div className="boost">
            <h1 className="title">Boost yout links today</h1>
            
            <label htmlFor="linkInput" className="startBtn">
                Get Started
            </label>
        </div>
    );
};

export default Boost;
