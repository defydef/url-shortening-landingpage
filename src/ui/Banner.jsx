import Button from "./Button";
import BgBoostMobile from "../svg/BgBoostMobile";
import BgBoostDesktop from "../svg/BgBoostDesktop";

function Banner() {
  return (
    <div className="grid grid-rows-2 grid-cols-1">
      <BgBoostMobile />
      <BgBoostDesktop />
      <div className="w-screen bg-[var(--secondary-1)] z-0 row-start-1 row-span-full col-start-1 col-span-full"></div>
      <div className="z-10 row-start-1 row-span-full col-start-1 flex flex-col justify-center items-center gap-5">
        <h1 className="text-white font-bold text-[1.75rem] text-center">
          Boost your links today
        </h1>
        <Button additionalClass="w-[50vw] sm:w-max sm:px-10 mx-auto h-max">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Banner;
