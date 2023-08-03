import { useEffect } from "react"
import { useState } from "react"

function CoinTracker() {
  const [loading, setLoding] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
    .then((res) => res.json())
    .then((json) => {
      setCoins(json)
      setLoding(false)
    })
  }, [])
  
  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {
        loading ? 
        <strong>Loading...</strong> : 
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      }
      
    </div>
  )
}

export default CoinTracker