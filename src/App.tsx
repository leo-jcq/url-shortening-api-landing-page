import { FC } from 'react';
import './App.scss';
import Header from './content/Header/Header';
import Hero from './content/Hero/Hero';
import Links from './content/Links/Links';
import Stats from './content/Stats/Stats';
import Boost from './content/Boost/Boost';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Links />
            <Stats />
            <Boost />
        </div>
    );
};

export default App;
