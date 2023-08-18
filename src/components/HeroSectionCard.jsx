function HeroSectionCard({ name, price, iconPath, marketCap }) {
  return (
    <div className="text-lg lg:text-2xl font-semibold flex flex-col items-center">
      <img src={iconPath} alt="crypto coin" className="h-16 lg:h-24" />
      <div className="mt-2">
        <span> {name} </span>
        <span
          className={`${marketCap > 0 ? "text-green-600" : "text-red-600"}`}
        >
          {getFirstTwoDecimalDigits(marketCap)} %
        </span>
      </div>
      <p className="mt-1">{formatCurrency(price)}</p>
    </div>
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
export default HeroSectionCard;
