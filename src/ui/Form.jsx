import BgShortenDesktop from "../svg/BgShortenDesktop";
import BgShortenMobile from "../svg/BgShortenMobile";
import Button from "./Button";

function Form() {
  return (
    <section className="flex flex-col justify-start items-center row-start-1 row-span-2 col-start-1 z-10">
      <form className="py-6 sm:p-0 bg-[var(--secondary-1)] w-[327px] sm:w-[80vw] rounded-[0.625rem] overflow-hidden flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <BgShortenMobile />
          <BgShortenDesktop />
          <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 sm:gap-5 row-start-1 col-start-1 sm:col-start-1 z-10 px-6 sm:px-12">
            <input
              id="url"
              type="text"
              className="p-4 placeholder:opacity-50 text-[var(--primary)] rounded-[0.3125rem] sm:w-[65vw] focus:outline-[var(--accent)] focus:outline-offset-1"
              placeholder="Shorten a link here..."
            />
            <Button
              round="rounded-[0.3125rem]"
              additionalClass="sm:px-3 sm:w-[12vw]"
            >
              Shorten It!
            </Button>
          </div>
        </div>
      </form>
      {/* <div className="bg-yellow-400"> test</div> */}
    </section>
  );
}

export default Form;
