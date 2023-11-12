// import Illustration from "../../public/images/illustration-working.svg";
import Illustration from "../svg/Illustration";

function Hero() {
  return (
    <section className="overflow-hidden pl-6">
      {/* <img src={Illustration} alt="Illustration image" width="800" /> */}
      <Illustration />
    </section>
  );
}

export default Hero;
