import Logo from "../svg/Logo";
import FooterContent from "./FooterContent";

function Footer() {
  const featureItems = ["Link Shortening", "Branded Links", "Analytics"];
  return (
    <footer className="bg-[var(--dark)] w-screen flex flex-col justify-center items-center gap-5 p-10 text-white">
      <Logo fill="white" />
      <FooterContent title="Features" items={featureItems} />
    </footer>
  );
}

export default Footer;
