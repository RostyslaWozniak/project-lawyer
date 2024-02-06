import backgroundImg from "/src/assets/images/background/hero-bg.jpg";

import Button from "../../../components/ui/Button";
import Heading from "./Heading";
import AnimateElement from "../../../components/ui/AnimateElement";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="grid min-h-screen place-items-center text-light"
      style={{
        backgroundImage: `url("${backgroundImg}")`,
        backgroundSize: "cover",
        backgroundPositionY: "bottom",
        backgroundPositionX: "center",
      }}
    >
      <div className="content flex flex-col items-center gap-10 text-center ">
        <Heading />
        <AnimateElement>
          <p className="text-sm italic md:text-xl">
            We provide high-quality legal services, tailored to your specific
            needs. We listen carefully and work diligently to ensure that you
            receive the best outcome possible. Our team of experts will guide
            you through each step of the process with precision and care. With
            us as your responsible legal partner, you can rest assured that your
            rights are protected and respected every step of the way!
          </p>
        </AnimateElement>
        <AnimateElement delay={0.7} className="flex gap-10">
          <Button className="overflow-hidden hover:bg-light hover:text-dark">
            <Link className="w-full p-16" to="services">
              Learn more
            </Link>
          </Button>
        </AnimateElement>
      </div>
    </section>
  );
};

export default HeroSection;
