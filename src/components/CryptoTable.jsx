import { useCryptoContext } from "../contexts/UseCryptoContextProvider";
import SingleTableRow from "./SingleTableRow";

function CryptoTable() {
  let { cryptoData } = useCryptoContext();
  const renderTableRow = cryptoData.map((crypto) => (
    <SingleTableRow
      key={crypto.id}
      name={crypto.name}
      image={crypto.image}
      current_price={crypto.current_price}
      market_cap={crypto.market_cap}
      market_cap_change_percentage_24h={crypto.market_cap_change_percentage_24h}
    />
  ));
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-16">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xl font-medium uppercase  bg-gradient text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              24h Change
            </th>
            <th scope="col" className="px-6 py-3">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>{renderTableRow}</tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
