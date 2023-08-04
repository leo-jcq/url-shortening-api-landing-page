import { FC, useRef } from 'react';
import './App.scss';
import Header from './content/Header/Header';
import Hero from './content/Hero/Hero';

const App: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="app">
            <Header />
            <Hero inputRef={inputRef} />
        </div>
    );
};

export default App;
