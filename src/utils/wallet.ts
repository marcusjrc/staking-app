export const formatAddress = (address: string) =>
    `${address.substring(0, 6)}...${address.substring(address.length - 5, address.length - 1)}`;
