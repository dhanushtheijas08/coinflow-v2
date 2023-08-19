import { Link } from "react-router-dom";

function SingleTableRow({
  name,
  image,
  current_price,
  market_cap,
  market_cap_change_percentage_24h,
  id,
}) {
  const marketCapChangeColor =
    market_cap_change_percentage_24h > 0 ? "text-green-600" : "text-red-600";

  return (
    <Link to={`/${id}`} className="cursor-pointer">
      <div
        className={`border-b text-white border-b-white hover:bg-[#200840] bg-transparent ${marketCapChangeColor}`}
      >
        <div className="px-6 py-4 grid grid-cols-4 ">
          <div className="flex items-center">
            <img src={image} alt="crypto coin image" className="h-8 lg:h-10" />
            <span className="opacity-90 ml-2 sm:ml-4 text-sm md:text-base lg:text-xl font-semibold">
              {name}
            </span>
          </div>
          <div className="px-6 py-4 text-sm md:text-base lg:text-xl font-medium">
            {formatCurrency(current_price)}
          </div>
          <div
            className={`px-6 py-4 text-sm md:text-base lg:text-xl font-medium ${marketCapChangeColor}`}
          >
            {getFirstTwoDecimalDigits(market_cap_change_percentage_24h)} %
          </div>
          <div className="px-6 py-4 text-sm md:text-base lg:text-xl font-medium">
            {formatCurrency(market_cap)}
          </div>
        </div>
      </div>
      {/* <a className="table-row" href="/coin/bitcoin">
        <span>
          <img src={image} alt="crypto coin image" className="h-8 lg:h-10" />
          {name}
        </span>
        <p> {formatCurrency(current_price)}</p>
        <p className={`slider-coin__price ${marketCapChangeColor}`}>
          {getFirstTwoDecimalDigits(market_cap_change_percentage_24h)} %
        </p>
        <p> {formatCurrency(market_cap)}</p>
      </a> */}
    </Link>
  );
}

function formatCurrency(number) {
  const roundedNumber = Math.round(number);
  const formattedNumber = roundedNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber.replace(/\.\d{2}$/, ".00");
}

function getFirstTwoDecimalDigits(number) {
  const truncatedNumber = Math.floor(number * 100) / 100;
  return truncatedNumber;
}

export default SingleTableRow;
