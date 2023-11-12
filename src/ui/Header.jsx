import Button from "./Button";

function Header() {
  return (
    <section className="flex flex-col justify-center py-8 gap-5 px-6 items-center">
      <h1 className="text-[2.625rem] text-[#34313D] font-bold leading-[3rem] text-center">
        More than just shorter links
      </h1>
      <p className="text-[1.125rem] leading-[1.875rem] tracking-[0.00769rem] text-[var(--grey)] text-center">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button>Get Started</Button>
    </section>
  );
}

export default Header;
