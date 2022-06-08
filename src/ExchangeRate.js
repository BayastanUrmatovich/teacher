import { getExchangeRate } from "./data"

function ExchangeRate({from,to}) {
    const rate=89

    return (
        <div className="App">
    {from}\{to}={rate}
    </div>
        )
}

export default ExachangeRate;