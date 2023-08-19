import { useCryptoContext } from "../contexts/UseCryptoContextProvider";
import SingleTableRow from "./SingleTableRow";

function CryptoTable() {
  let { cryptoData } = useCryptoContext();
  const renderTableRows = cryptoData.map((crypto) => (
    <SingleTableRow
      key={crypto.id}
      id={crypto.id}
      name={crypto.name}
      image={crypto.image}
      current_price={crypto.current_price}
      market_cap={crypto.market_cap}
      market_cap_change_percentage_24h={crypto.market_cap_change_percentage_24h}
    />
  ));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-16">
      <div className="w-full text-sm text-gray-500 dark:text-gray-400">
        <div className="text-xl font-medium uppercase bg-gradient text-white">
          <div className="flex">
            <div className="px-6 py-3 w-1/4">Coin</div>
            <div className="px-6 py-3 w-1/4">Price</div>
            <div className="px-6 py-3 w-1/4">24h Change</div>
            <div className="px-6 py-3 w-1/4">Market Cap</div>
          </div>
        </div>
        <div>{renderTableRows}</div>
      </div>
    </div>
  );
}

export default CryptoTable;
