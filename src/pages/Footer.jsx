import footer1 from "../assets/footer-1.png";
import footer2 from "../assets/footer-2.png";
import FooterLinks from "../components/FooterLinks";
function Footer() {
  return (
    <footer className="secondary-section px-4 md:px-8 lg:px-10 pt-10 md:pt-6 lg:pt-7 flex justify-center md:justify-between items-center">
      <img
        src={footer1}
        alt="footer 1"
        className="hidden md:block md:h-32 lg:h-60 "
      />
      <div className="flex flex-col ">
        <FooterLinks />
        <ul className="text-lg md:text-xl lg:text-[1.4rem] text-center">
          <li className="space-x-5">
            <a href="#" className="gradient-hover">
              Privacy{" "}
            </a>
            <a href="#" className="gradient-hover">
              Terms of Use
            </a>
          </li>
          <small className="text-xs md:text-sm">
            © 2023 Coin Flow 💖 Developed by dhanush theijas
          </small>
        </ul>
      </div>
      <img
        src={footer2}
        alt="footer 2"
        className="hidden md:block md:h-32 lg:h-60 "
      />
    </footer>
  );
}

export default Footer;
