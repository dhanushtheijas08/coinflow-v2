import CryptoTable from "../components/CryptoTable";
import SectionHeading from "../components/SectionHeading";

function MarketUpdates() {
  return (
    <section className="secondary-section px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7">
      <SectionHeading name="Market Update" />

      <CryptoTable />
    </section>
  );
}

export default MarketUpdates;
