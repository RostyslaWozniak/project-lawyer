import { useEffect } from "react";
import ServicesSection from "../../components/ServicesSection";

const Services = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="mt-28">
      <ServicesSection />
    </div>
  );
};

export default Services;
