import DOMPurify from "dompurify";
import { useState } from "react";
function SingleCryptoData({
  name,
  rank,
  description,
  imagePath,
  priceInINR,
  totalWatchlist,
  priceDifferenceIn24h,
}) {
  const [isLess, setIsLess] = useState(true);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-20">
      <div className="flex flex-col text-2xl font-semibold items-center">
        <img src={imagePath} alt="crypto coin" className="h-56 mb-8" />
        <span>Name : {name}</span>
        <span>Rank : {rank}</span>
      </div>
      <div className="col-span-3 md:mt-10 lg:mt-0">
        <div className="flex flex-wrap flex-col md:flex-row text-center mt-6 md:mt-0 justify-between  md:text-lg lg:text-2xl font-semibold">
          <span>
            Price :
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
          {isLess ? (
            <p className="md:text-lg lg:text-xl text-wrap mt-5 text-justify lg:text-left">
              <span
                className="crypto-description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description.slice(0, 660)),
                }}
              ></span>
              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setIsLess(false)}
              >
                {isLess ? "...Read More" : "...Read Less"}
              </span>
            </p>
          ) : (
            <p className="text-xl text-wrap mt-5">
              <span
                className="crypto-description  "
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(description),
                }}
              ></span>
              <span
                className="text-green-600 cursor-pointer"
                onClick={() => setIsLess(true)}
              >
                {isLess ? "...Read More" : "...Read Less"}
              </span>
            </p>
          )}
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
