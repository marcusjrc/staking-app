import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';
import WalletInfo from '../components/WalletInfo';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
                <Typography variant="h6">Staking App</Typography>
                <WalletInfo />
            </Box>
        </AppBar>
    );
};

export default Navbar;
