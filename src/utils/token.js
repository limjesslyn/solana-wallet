import tokenlist from "../resources/solana.tokenlist.json"

export const FindTokenFromSolanaTokenList = (address) => {
    for (let i = 0; i < tokenlist.tokens.length; i++) {
        if (tokenlist.tokens[i].address === address) {
            return tokenlist.tokens[i]
        }
    }
    return undefined
}