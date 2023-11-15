import Logo from "../svg/Logo";
import BurgerMenu from "../svg/BurgerMenu";
import Button from "./Button";

function Navbar({ setIsShowMobileMenu }) {
  function showMobileMenu() {
    setIsShowMobileMenu((prev) => !prev);
  }
  return (
    <nav className="pt-10 pb-6 w-screen px-6 sm:px-20">
      <ul className="flex justify-between">
        <li className="flex items-center gap-14">
          <Logo />
          <div className="font-bold text-[var(--grey)] flex items-center gap-8">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
          </div>
        </li>
        <li>
          <button className="cursor-pointer sm:hidden" onClick={showMobileMenu}>
            <BurgerMenu />
          </button>
        </li>
        <div className="hidden sm:flex justify-between items-center gap-8">
          <p className="text-[var(--grey)] font-bold">Login</p>
          <Button additionalClass="px-8 w-max">Sign Up</Button>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
