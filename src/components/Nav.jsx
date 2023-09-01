function Nav() {
  return (
    <nav>
      {/* Desktop NavBar */}
      <ul className="hidden lg:flex text-2xl gap-12  font-semibold">
        <li>
          <a href="#home" className="gradient-hover">
            Home
          </a>
        </li>
        <li>
          <a href="#market" className="gradient-hover">
            Market
          </a>
        </li>
        <li>
          <a href="#choose-us" className="gradient-hover">
            Choose Us
          </a>
        </li>
        <li>
          <a href="#join" className="gradient-hover">
            Join
          </a>
        </li>
      </ul>

      {/* Mobile NavBar */}
      <ul className="hidden absolute w-full h-screen flex-col lg:hidden">
        <li>
          <a href="#home" className="gradient-hover">
            Home
          </a>
        </li>
        <li>
          <a href="#market" className="gradient-hover">
            Market
          </a>
        </li>
        <li>
          <a href="#choose-us" className="gradient-hover">
            Choose Us
          </a>
        </li>
        <li>
          <a href="#join" className="gradient-hover">
            Join
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
