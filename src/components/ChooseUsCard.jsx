function ChooseUsCard({ heading, content, iconPath }) {
  return (
    <div className="bg-chooseUsCardBackground hover:bg-chooseUsCardBackgroundHover border-2 rounded-lg border-chooseUsCardBorder max-w-sm md:max-w-fit  flex px-2 py-2 gap-2 md:gap-4 lg:px-6 lg:py-4 justify-center cursor-pointer">
      <div className=" p-2  rounded-sm md:rounded-lg bg-gradient self-center">
        <img
          src={iconPath}
          alt="wallet"
          className="hidden md:block h-6 md:h-8 lg:h-9"
        />
      </div>
      <div className="flex flex-col text-center">
        <h4 className="uppercase md:text-xl lg:text-2xl xl:text-3xl font-semibold">
          {heading}
        </h4>
        <p className="md:text-base xl:text-lg md:max-w-[15rem] lg:max-w-xs md:text-center lg:mx-auto ">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ChooseUsCard;
