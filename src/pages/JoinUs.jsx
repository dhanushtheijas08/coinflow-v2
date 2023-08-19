import Button from "../components/Button";
import HeroSectionText from "../components/HeroSectionContent";

function JoinUs() {
  return (
    <section className="secondary-section px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7 flex flex-col items-center">
      <HeroSectionText
        mainText={"JOIN US VIA"}
        highLightText={"Media"}
        classname="mt-1"
        mainClassname="md:gap-8 lg:gap-24"
      />
      <p className="text-wrap text-center mt-2 text-xl lg:text-2xl">
        Invest and manage all your crypto at one place.
      </p>

      <Button style="bg-gradient hover-event mt-8 lg:mt-16">
        Join Via Twitter
      </Button>
    </section>
  );
}

export default JoinUs;
