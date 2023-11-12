import BgShortenMobile from "../svg/BgShortenMobile";
import Button from "./Button";

function Form() {
  return (
    <section className="flex flex-col justify-start items-center row-start-1 row-span-2 col-start-1 z-10">
      <form className="py-6 bg-[var(--secondary-1)] w-[327px] rounded-[0.625rem] overflow-hidden flex justify-center items-center">
        <div className="grid grid-cols-1 grid-rows-1 col-span-1">
          <BgShortenMobile />
          <div className="w-full flex flex-col gap-3 row-start-1 z-10 px-6">
            <input
              id="url"
              type="text"
              className="p-4 placeholder:opacity-50 text-[var(--primary)] rounded-[0.3125rem]"
              placeholder="Shorten a link here..."
            />
            <Button round="rounded-[0.3125rem]">Shorten It!</Button>
          </div>
        </div>
      </form>
      {/* <div className="bg-yellow-400"> test</div> */}
    </section>
  );
}

export default Form;
