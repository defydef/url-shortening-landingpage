import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import Header from "./ui/Header";
import Form from "./ui/Form";
import Stats from "./ui/Stats";
import Banner from "./ui/Banner";
import Footer from "./ui/Footer";
import Illustration from "./svg/Illustration";

function App() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  return (
    <>
      <main>
        <Navbar setIsShowMobileMenu={setIsShowMobileMenu} />
        <MobileMenu isShowMobileMenu={isShowMobileMenu} />
        <div className="flex flex-col gap-5 sm:flex-row-reverse justify-center items-center sm:py-10">
          <Hero />
          <Header />
        </div>
        <div className="grid grid-rows-[1fr_1fr_minmax(1200px, _1fr)] grid-cols-1 pt-24">
          <Form />
          <Stats />
        </div>
        <Banner />
      </main>
      <Footer />
    </>
  );
}

export default App;
