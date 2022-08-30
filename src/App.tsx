import React from 'react';

import { AppRoutes } from './routes';
import GlobalStyle from './styles/global';
import './index.css'
function App() {
    return (
        <>
            <GlobalStyle />
            <AppRoutes />
        </>
    );
}

export default App;
