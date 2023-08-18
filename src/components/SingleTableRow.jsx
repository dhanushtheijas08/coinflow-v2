function SingleTableRow({
  name,
  image,
  current_price,
  market_cap,
  market_cap_change_percentage_24h,
}) {
  return (
    <tr className="border-b text-white border-b-white bg-transparent hover:bg-[#200840] cursor-pointer">
      <th
        scope="row"
        className="px-6 py-6  whitespace-nowrap  flex items-center text-2xl gap-4"
      >
        <span>
          <img src={image} alt="crypto coin image" className="h-12" />
        </span>
        <span className="opacity-90"> {name} </span>
      </th>
      <td className="px-6 py-6 items-center text-xl font-medium">
        {formatCurrency(current_price)}
      </td>
      <td
        className={`px-6 py-6 items-center text-xl font-medium ${
          market_cap_change_percentage_24h > 0
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {getFirstTwoDecimalDigits(market_cap_change_percentage_24h)} %
      </td>
      <td className="px-6 py-6 items-center text-xl font-medium">
        {formatCurrency(market_cap)}
      </td>
    </tr>
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
