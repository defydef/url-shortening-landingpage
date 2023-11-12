import BgShortenMobile from "../svg/BgShortenMobile";
import Button from "./Button";

function Form() {
  return (
    <div className="py-8 flex justify-center">
      <form className="py-6 bg-[var(--secondary-1)] w-[327px] rounded-[0.625rem] overflow-hidden flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <BgShortenMobile />
          <div className="w-full flex flex-col gap-3 row-start-1 z-10 px-6">
            <input
              id="url"
              type="text"
              className="p-3 placeholder:opacity-50 text-[var(--primary)] rounded-[0.3125rem]"
              placeholder="Shorten a link here..."
            />
            <Button round="rounded-[0.3125rem]">Shorten It!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
