import { FC } from 'react';
import iconBrandRecognition from '../../assets/icon-brand-recognition.svg';
import iconDetailledRecords from '../../assets/icon-detailed-records.svg';
import iconFullyCustomizable from '../../assets/icon-fully-customizable.svg';
import Card from '../../components/Card/Card';
import './Stats.scss';

const Stats: FC = () => {
    return (
        <div className="stats">
            <div className="text">
                <h1 className="title1">Advanced Statistics</h1>
                <p className="description">
                    Track how your links are performing across the web with our advanced statistics
                    dashboard
                </p>
            </div>

            <div className="cards">
                <div className="line"></div>

                <Card
                    icon={iconBrandRecognition}
                    title="Brand Recognition"
                    description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                />

                <Card
                    icon={iconDetailledRecords}
                    title="Detailed Records"
                    description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                />

                <Card
                    icon={iconFullyCustomizable}
                    title="Fully Customizable"
                    description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                />
            </div>
        </div>
    );
};

export default Stats;
