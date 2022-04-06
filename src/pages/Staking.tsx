import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useWeb3React } from '@web3-react/core';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { useConnectWallet } from '../hooks/useConnectWallet';

interface BalanceContextState {
    ethBal: number | null;
}

export const BalanceContext = React.createContext<BalanceContextState>({
    ethBal: null,
});

const Staking = () => {
    useConnectWallet();
    const { library, account } = useWeb3React();
    const [ethBal, setEthBalance] = useState<number | null>(null);

    useEffect(() => {
        const fetchBal = async () => {
            const balance = await library.getBalance(account);
            setEthBalance(balance);
        };
        if (!library || !account) {
            return;
        }
        fetchBal();
    }, [library, account]);

    return (
        <>
            <BalanceContext.Provider value={{ ethBal }}>
                <Navbar></Navbar>
                <Box mt={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={4} />
                        <Grid item xs={12} md={4} sm={12}>
                            <Card raised>
                                <CardContent>
                                    <Typography variant="h5">Staked Balance</Typography>
                                    <Typography variant="body1">10 TKN</Typography>
                                    <Divider />
                                    <Typography variant="h5">Unstaked Balance</Typography>
                                    <Typography variant="body1">10 TKN</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </BalanceContext.Provider>
        </>
    );
};

export default Staking;
