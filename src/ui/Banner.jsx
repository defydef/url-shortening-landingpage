import Button from "./Button";

function Banner() {
  return (
    <div className="w-[23.4375rem] bg-[var(--secondary-1)] flex flex-col gap-4 justify-center items-center py-28 px-7">
      <h1 className="text-white font-bold text-[1.75rem] text-center">
        Boost your links today
      </h1>
      <Button width="w-[50vw]">Get Started</Button>
    </div>
  );
}

export default Banner;
