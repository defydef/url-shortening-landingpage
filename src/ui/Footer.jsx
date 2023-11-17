import Logo from "../svg/Logo";
import FooterContent from "./FooterContent";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  const featureItems = ["Link Shortening", "Branded Links", "Analytics"];
  const resourcesItems = ["Blog", "Developers", "Support"];
  const companyItems = ["About", "Our Team", "Careers", "Contact"];
  return (
    <footer className="bg-[var(--dark)] w-screen flex flex-col sm:flex-row justify-center sm:justify-around sm:items-start items-center gap-14 sm:gap-0 p-16 text-white">
      <Logo fill="white" />
      <div className="flex flex-col gap-12 sm:flex-row sm:gap-28 sm:justify-center sm:items-start">
        <FooterContent title="Features" items={featureItems} />
        <FooterContent title="Resources" items={resourcesItems} />
        <FooterContent title="Company" items={companyItems} />
        <SocialMediaIcons />
      </div>
    </footer>
  );
}

export default Footer;
