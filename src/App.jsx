import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";

function App() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <main>
      <Navbar setIsShowMobileMenu={setIsShowMobileMenu} />
      <MobileMenu isShowMobileMenu={isShowMobileMenu} />
    </main>
  );
}

export default App;
