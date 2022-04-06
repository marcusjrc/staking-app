import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Staking from './pages/Staking';
import { Web3ReactProvider } from '@web3-react/core';
import { providers } from 'ethers';

const App = () => {
    return (
        <Web3ReactProvider getLibrary={(provider) => new providers.Web3Provider(provider)}>
            <CssBaseline />

            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Staking />}></Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </Web3ReactProvider>
    );
};

export default App;
