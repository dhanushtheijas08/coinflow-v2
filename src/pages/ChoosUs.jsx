import ChooseUsCard from "../components/ChooseUsCard";
import SectionHeading from "../components/SectionHeading";
import chooseUsCardData from "../data/chooseUsCardData";
function ChoosUs() {
  const renderCards = chooseUsCardData.map((card) => (
    <ChooseUsCard
      key={card.id}
      heading={card.heading}
      content={card.content}
      iconPath={card.iconPath}
    />
  ));
  return (
    <div className="bg-primary py-10 w-full px-12">
      <SectionHeading name="Why Choose Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 place-items-center my-16">
        {renderCards}
      </div>
    </div>
  );
}

export default ChoosUs;
