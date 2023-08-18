import SectionText from "./SectionText";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
function HeroSectionText({
  mainText,
  highLightText,
  classname = "",
  mainClassname = "",
}) {
  return (
    <div className={`flex justify-center items-center ${mainClassname}`}>
      <img
        src={bitcoin}
        alt="bitcoin"
        className="hidden md:flex md:h-11 lg:h-24 animate-image"
      />
      <SectionText
        mainText={mainText}
        highLightText={highLightText}
        classname={classname}
      />
      <img
        src={ethereum}
        alt="ethereum"
        className="hidden md:flex md:h-11 lg:h-24 animate-image"
      />
    </div>
  );
}

export default HeroSectionText;
