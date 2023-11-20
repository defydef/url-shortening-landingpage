import Logo from "../svg/Logo";
import BurgerMenu from "../svg/BurgerMenu";
import Button from "./Button";

function Navbar({ setIsShowMobileMenu }) {
  function showMobileMenu() {
    setIsShowMobileMenu((prev) => !prev);
  }
  const hoverStyle = "hover:text-[var(--primary)] cursor-pointer";
  return (
    <nav className="pt-10 pb-6 w-screen px-6 sm:px-40">
      <ul className="flex justify-between">
        <li className="sm:hidden">
          <Logo />
        </li>
        <li className="hidden sm:flex items-center gap-14">
          <Logo />
          <div className="font-bold text-[var(--grey)] flex items-center gap-8">
            <p className={hoverStyle}>Features</p>
            <p className={hoverStyle}>Pricing</p>
            <p className={hoverStyle}>Resources</p>
          </div>
        </li>
        <li>
          <button className="cursor-pointer sm:hidden" onClick={showMobileMenu}>
            <BurgerMenu />
          </button>
        </li>
        <li className="hidden sm:flex justify-between items-center gap-8">
          <p className={`text-[var(--grey)] font-bold ${hoverStyle}`}>Login</p>
          <Button additionalClass="px-8 w-max">Sign Up</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
