import Logo from "../svg/Logo";
import BurgerMenu from "../svg/BurgerMenu";
import { useState } from "react";

function Navbar({ setIsShowMobileMenu }) {
  function showMobileMenu() {
    setIsShowMobileMenu((prev) => !prev);
    console.log("test");
  }
  return (
    <nav className="pt-10 pb-6 w-[85vw]">
      <ul className="flex justify-between items-center">
        <Logo />
        <button className="cursor-pointer" onClick={showMobileMenu}>
          <BurgerMenu />
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
