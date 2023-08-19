import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CryptoContext = createContext();

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en";

function UseCryptoContextProvider({ children }) {
  const [cryptoData, setCryptoData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchCryptoData() {
      try {
        setIsLoading(true);
        const res = await fetch(BASE_URL);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setCryptoData(data);
      } catch (error) {
        console.error(
          "An error occurred while fetching crypto data:",
          error.message
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchCryptoData();
  }, []);

  return (
    <CryptoContext.Provider
      value={{ cryptoData, isLoading, setPageNumber, pageNumber }}
    >
      {children}
    </CryptoContext.Provider>
  );
}
function useCryptoContext() {
  const context = useContext(CryptoContext);
  if (!context)
    throw new Error(
      "useCryptoContext must be used within a CryptoContextProvider"
    );

  return context;
}

export { useCryptoContext, UseCryptoContextProvider };
