function SectionText({ mainText, highLightText, classname = "" }) {
  return (
    <h3
      className={`text-wrap main-text text-4xl md:text-5xl lg:text-8xl font-semibold flex flex-col text-center uppercase ${classname}`}
    >
      {mainText}
      <span className="text-[2.1rem] md:text-[2.8rem] lg:text-[6.5rem]">
        {highLightText}
      </span>
    </h3>
  );
}

export default SectionText;
