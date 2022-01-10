import { Keypair } from "@solana/web3.js";

export const ShortenAddress = (address) => {
    if (address.length <= 8)
        return address
    return address.substr(0, 4) + "..." + address.substr(-4, 4)
}

export const Secret2Keypair = (secret) => {
    return Keypair.fromSecretKey(
        Uint8Array.from(secret)
    );
}

export const SecretString2Secret = (secretString) => {
    return secretString.split(',').map((item) => parseInt(item, 10));
}