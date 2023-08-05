import { FC } from 'react';
import './App.scss';
import Header from './content/Header/Header';
import Hero from './content/Hero/Hero';
import Links from './content/Links/Links';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <Links />
        </div>
    );
};

export default App;
