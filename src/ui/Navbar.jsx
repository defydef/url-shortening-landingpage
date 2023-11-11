import Logo from "../svg/Logo";
import BurgerMenu from "../svg/BurgerMenu";

function Navbar() {
  return (
    <nav className="py-10 w-[85vw]">
      <ul className="flex justify-between items-center">
        <Logo />
        <div className="cursor-pointer">
          <BurgerMenu />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
