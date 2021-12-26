export const ShortenAddress = (address) => {
    if (address.length <= 8)
        return address
    return address.substr(0, 4) + "..." + address.substr(-4, 4)
}