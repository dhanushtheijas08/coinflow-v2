import DOMPurify from "dompurify";
function SingleCryptoData({
  name,
  rank,
  description,
  imagePath,
  priceInINR,
  totalWatchlist,
  priceDifferenceIn24h,
}) {
  return (
    <div className="grid grid-cols-4 mt-20">
      <div className="flex flex-col text-2xl font-semibold items-center">
        <img src={imagePath} alt="crypto coin" className="h-56 mb-8" />
        <span>Name : {name}</span>
        <span>Rank : {rank}</span>
      </div>
      <div className="col-span-3 ">
        <div className="flex justify-between text-2xl font-semibold">
          <span>
            Price :{" "}
            <span className="text-green-600">
              {formatCurrency(getFirstTwoDecimalDigits(priceInINR))}
            </span>
          </span>
          <span>
            24h Change :
            <span
              className={`${
                priceDifferenceIn24h > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {formatCurrency(getFirstTwoDecimalDigits(priceDifferenceIn24h))}
            </span>
          </span>
          <span>Total Watchlist : {totalWatchlist}</span>
        </div>
        <div>
          <p
            className="crypto-description text-xl text-wrap mt-5"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description.slice(0, 660)),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
}
function formatCurrency(number) {
  const roundedNumber = Math.round(number);
  const formattedNumber = roundedNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber.replace(/\.\d{2}₹/, ".00");
}

function getFirstTwoDecimalDigits(number) {
  const truncatedNumber = Math.floor(number * 100) / 100;
  return truncatedNumber;
}

export default SingleCryptoData;
