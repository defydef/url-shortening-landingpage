import Logo from "../svg/Logo";
import FooterContent from "./FooterContent";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  const featureItems = ["Link Shortening", "Branded Links", "Analytics"];
  const resourcesItems = ["Blog", "Developers", "Support"];
  const companyItems = ["About", "Our Team", "Careers", "Contact"];
  return (
    <footer className="bg-[var(--dark)] w-screen flex flex-col justify-center items-center gap-14 p-16 text-white">
      <Logo fill="white" />
      <FooterContent title="Features" items={featureItems} />
      <FooterContent title="Resources" items={resourcesItems} />
      <FooterContent title="Company" items={companyItems} />
      <SocialMediaIcons />
    </footer>
  );
}

export default Footer;
