import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Header from "./ui/Header";
import Form from "./ui/Form";

function App() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <main>
      <Navbar setIsShowMobileMenu={setIsShowMobileMenu} />
      <MobileMenu isShowMobileMenu={isShowMobileMenu} />
      <Hero />
      <Header />
      <Form />
    </main>
  );
}

export default App;
