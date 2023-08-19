import { useCryptoContext } from "../contexts/UseCryptoContextProvider";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroSectionCard from "../components/HeroSectionCard";
import Spinner from "../components/Spinner";
function HomePage() {
  let { cryptoData, isLoading } = useCryptoContext();
  let newCryptoData = cryptoData.slice(0, 4);
  const renderCryptoList = newCryptoData.map((crypto) => (
    <HeroSectionCard
      key={crypto.id}
      id={crypto.id}
      name={crypto.name}
      price={crypto.current_price}
      iconPath={crypto.image}
      marketCap={crypto.market_cap_change_percentage_24h}
    />
  ));
  return (
    <section
      id="home"
      className="home-section px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7 flex flex-col"
    >
      <Header />
      <Hero />
      {isLoading ? (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 place-content-between lg:place-content-evenly my-16">
          {renderCryptoList}
        </div>
      )}
    </section>
  );
}

export default HomePage;
