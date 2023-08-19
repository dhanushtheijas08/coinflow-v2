import { useCryptoContext } from "../contexts/UseCryptoContextProvider";
import SingleTableRow from "./SingleTableRow";
import Spinner from "./Spinner";

function CryptoTable() {
  let { cryptoData, isLoading } = useCryptoContext();
  const renderTableRows = cryptoData.map((crypto) => (
    <SingleTableRow
      key={crypto.id}
      id={crypto.id}
      pageNumber
      name={crypto.name}
      image={crypto.image}
      current_price={crypto.current_price}
      market_cap={crypto.market_cap}
      market_cap_change_percentage_24h={crypto.market_cap_change_percentage_24h}
    />
  ));

  return (
    <div className="w-full overflow-x-scroll md:overflow-x-auto">
      {isLoading ? (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="shadow-md sm:rounded-lg my-16">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <div className="lg:text-xl md:text-base rounded-t-xl font-medium uppercase bg-gradient text-white">
              <div className="flex justify-between px-6 py-3 items-center">
                <div>Coin</div>
                <div>Price</div>
                <div>24h Change</div>
                <div>Market Cap</div>
              </div>
            </div>
            <div>{renderTableRows}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CryptoTable;
