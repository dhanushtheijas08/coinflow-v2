import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoDiscordAlt } from "react-icons/bi";

function FooterLinks() {
  return (
    <div className="flex gap-6 items-center mx-auto">
      <a href="#">
        <BsTwitter className="text-2xl lg:text-5xl" />
      </a>
      <a href="#">
        <AiFillInstagram className="text-3xl lg:text-5xl" />
      </a>
      <a href="#">
        <BsFacebook className="text-2xl lg:text-[2.65rem]" />
      </a>
      <a href="#">
        <BiLogoDiscordAlt className="text-[2.2rem] lg:text-6xl" />
      </a>
    </div>
  );
}

export default FooterLinks;
