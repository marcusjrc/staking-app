import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { injected } from '../utils/connector';

export const useConnectWallet = () => {
    const { activate, error, active } = useWeb3React();
    const [attemptedConnect, setAttemptedConnect] = useState(false);
    useEffect(() => {
        injected
            .isAuthorized()
            .then((isAuthorized) => {
                setAttemptedConnect(true);
                if (isAuthorized && !active && !error) {
                    activate(injected);
                }
            })
            .catch(() => {
                setAttemptedConnect(true);
            });
    }, [activate, active, error]);
    return attemptedConnect;
};
