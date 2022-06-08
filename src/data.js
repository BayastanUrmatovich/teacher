const exchangeRates = {
USDKGS: 89,
EURKGS: 100,
KGSUSD: 0.12,
}

export const getExchangeRate = (pair) => {
    return exchangeRates [pair];
}

