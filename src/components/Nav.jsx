function Nav() {
  return (
    <nav>
      {/* Desktop NavBar */}
      <ul className="hidden lg:flex text-2xl gap-12 font-semibold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Market</a>
        </li>
        <li>
          <a href="#">Choose Us</a>
        </li>
        <li>
          <a href="#">Join</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
