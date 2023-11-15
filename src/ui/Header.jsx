import Button from "./Button";

function Header() {
  return (
    <section className="flex flex-col justify-center sm:justify-start py-8 gap-5 sm:gap-2 px-6 items-center sm:items-start sm:w-[62vw] sm:px-40">
      <h1 className="text-[2.625rem] sm:text-[5rem] text-[#34313D] font-bold leading-[3rem] sm:leading-[5.625rem] text-center sm:text-left sm:-tracking-[0.125rem]">
        More than just shorter links
      </h1>
      <p className="text-[1.125rem] sm:text-[1.375rem] leading-[1.875rem] sm:leading-[2.25rem] tracking-[0.00769rem] sm:tracking-[0.00938rem] text-[var(--grey)] text-center sm:text-left">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button additionalClass="sm:w-[15vw] mt-5">Get Started</Button>
    </section>
  );
}

export default Header;
