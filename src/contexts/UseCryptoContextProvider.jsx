import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CryptoContext = createContext();

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

function UseCryptoContextProvider({ children }) {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    async function fetchCryptoData() {
      const res = await fetch(BASE_URL);
      const data = await res.json();
      setCryptoData(data);
    }
    fetchCryptoData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData }}>
      {children}
    </CryptoContext.Provider>
  );
}

function useCryptoContext() {
  const context = useContext(CryptoContext);
  return context;
}

export { useCryptoContext, UseCryptoContextProvider };
