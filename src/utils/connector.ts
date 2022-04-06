import { InjectedConnector } from '@web3-react/injected-connector';

export enum Networks {
    mainnet = 1,
    ropsten = 3,
    rinkeby = 4,
    goerli = 5,
}

export const injected = new InjectedConnector({
    supportedChainIds: [Networks.mainnet, Networks.ropsten, Networks.rinkeby, Networks.goerli],
});
