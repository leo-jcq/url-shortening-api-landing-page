import { FC } from 'react';
import './App.scss';
import Boost from './content/Boost/Boost';
import Footer from './content/Footer/Footer';
import Header from './content/Header/Header';
import Hero from './content/Hero/Hero';
import Links from './content/Links/Links';
import Stats from './content/Stats/Stats';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Links />
            <Stats />
            <Boost />
            <Footer />
        </div>
    );
};

export default App;
