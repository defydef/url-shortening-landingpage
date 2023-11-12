import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";

function App() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <main>
      <Navbar setIsShowMobileMenu={setIsShowMobileMenu} />
      <MobileMenu isShowMobileMenu={isShowMobileMenu} />
      <Hero />
    </main>
  );
}

export default App;
