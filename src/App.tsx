import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
    <>
        {/* Caso não tenha incorpora a URL base da aplicação */}
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
