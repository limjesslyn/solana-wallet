export const GetClusterUrl = (cluster) => {
    switch(cluster) {
        case "Mainnet":
            return "mainnet-beta";
        case "Devnet":
            return "devnet";
        case "Testnet":
            return "testnet";
        default:
            return "mainnet-beta";
    }
}