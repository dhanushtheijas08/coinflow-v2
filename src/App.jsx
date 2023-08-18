import HomePage from "./pages/HomePage";
import MarketUpdates from "./pages/MarketUpdates";
import ChoosUs from "./pages/ChoosUs";
import JoinUs from "./pages/JoinUs";
import Footer from "./pages/Footer";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";
function App() {
  const [cryptoData, setCryptoData] = useState([]);

  // name, image, current_price, market_cap, price_change_24h
  useEffect(function () {
    async function fetchCryptoData() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setCryptoData(data);
    }
    // fetchCryptoData();
  }, []);
  return (
    <div>
      <HomePage cryptoData={cryptoData.slice(0, 4)} />
      <MarketUpdates cryptoData={cryptoData} />
      <ChoosUs />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
