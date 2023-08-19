import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import SingleCryptoData from "../components/SingleCryptoData";
const BASE_URL = "https://api.coingecko.com/api/v3/coins/";
function CryptoDataDisplay() {
  // market_cap_rank, description.en, image.large/small/thumb, name, market_data.current_price.inr ,watchlist_portfolio_users

  const { id } = useParams();
  const [cryptoData, setCryptoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchCryptoData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/${id}`);
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
    <section className="home-section lg:h-screen px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7">
      <Header />
      <div className="flex">
        {isLoading ? (
          <div className="w-full flex justify-center">
            <Spinner />
          </div>
        ) : cryptoData ? (
          <SingleCryptoData
            name={cryptoData.name}
            rank={cryptoData.market_cap_rank}
            description={cryptoData.description.en}
            imagePath={cryptoData.image.large}
            priceInINR={cryptoData.market_data.current_price.inr}
            totalWatchlist={cryptoData.watchlist_portfolio_users}
            priceDifferenceIn24h={
              cryptoData?.market_data?.price_change_24h_in_currency?.inr
            }
          />
        ) : null}
      </div>
    </section>
  );
}

export default CryptoDataDisplay;
