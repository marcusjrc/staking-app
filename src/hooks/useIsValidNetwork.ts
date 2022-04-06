import { useWeb3React } from '@web3-react/core';

export const useIsValidNetwork = (): boolean => {
    const { chainId } = useWeb3React();
    return !!chainId;
};
