import { FC } from 'react';
import './Card.scss';

interface CardProps {
    icon: string;
    title: string;
    description: string;
}

const Card: FC<CardProps> = ({ icon, title, description }) => {
    return (
        <div className="card">
            <div className="image">
                <img src={icon} alt="" />
            </div>
            <h2 className="title2">{title}</h2>
            <p className="description">{description}</p>
        </div>
    );
};

export default Card;
