import Logo from "./Logo";
import Nav from "./Nav";
import SocialMediaLinks from "./SocialMediaLinks";
function Header() {
  return (
    <header className="flex justify-between items-center navbar self-center">
      <Logo name={"COIN FLOW"} />
      <Nav />
      <SocialMediaLinks />
    </header>
  );
}

export default Header;
