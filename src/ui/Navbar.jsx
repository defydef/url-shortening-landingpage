import Logo from "../svg/Logo";
import BurgerMenu from "../svg/BurgerMenu";

function Navbar({ setIsShowMobileMenu }) {
  function showMobileMenu() {
    setIsShowMobileMenu((prev) => !prev);
  }
  return (
    <nav className="pt-10 pb-6 w-screen px-6">
      <ul className="flex justify-between">
        <li>
          <Logo />
        </li>
        <li>
          <button className="cursor-pointer" onClick={showMobileMenu}>
            <BurgerMenu />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
