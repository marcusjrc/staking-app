import { Box, Button, Tooltip } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import React from 'react';
import { injected } from '../utils/connector';
import { formatAddress } from '../utils/wallet';
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useIsValidNetwork } from '../hooks/useIsValidNetwork';
import { ethers } from 'ethers';

const WalletInfo = () => {
    const { active, account, activate, deactivate } = useWeb3React();
    const isValidNetwork = useIsValidNetwork();

    const connect = async () => {
        try {
            await activate(injected);
        } catch (e) {
            console.error(e);
        }
    };

    const copyAddress = () => {
        if (account) {
            navigator.clipboard.writeText(account);
        }
    };

    const switchToEthereum = async () => {
        const { ethereum } = window;
        const hexChainId = ethers.utils.hexValue(1);
        try {
            if (!ethereum.request) {
                return;
            }
            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: hexChainId }],
            });
        } catch (err) {
            console.error('Failed to switch to ethereum network', err);
        }
    };

    return (
        <Box p={1}>
            {!active ? (
                <>
                    {isValidNetwork ? (
                        <Button variant="contained" color="secondary" onClick={connect}>
                            Connect Wallet
                        </Button>
                    ) : (
                        <Button variant="contained" color="secondary" onClick={switchToEthereum}>
                            Switch Network
                        </Button>
                    )}
                </>
            ) : (
                <Box display="flex" alignItems="center">
                    <Tooltip title="Copy wallet address">
                        <Box
                            onClick={copyAddress}
                            mr={4}
                            display="flex"
                            alignItems="center"
                            style={{ cursor: 'pointer' }}
                        >
                            <Box mr={1}>
                                <ContentCopyIcon fontSize="small" />
                            </Box>
                            {account && formatAddress(account)}
                        </Box>
                    </Tooltip>
                    <Button variant="outlined" color="secondary" onClick={deactivate}>
                        <LogoutIcon />
                        Log out
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default WalletInfo;
