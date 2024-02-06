import CasesWeDealWithSection from "../../components/CasesWeDealWithSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import ServicesSection from "../../components/ServicesSection";
import ExperienceDescribe from "./components/ExperienceDescribe";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExperienceDescribe />
      <ServicesSection />
      <CasesWeDealWithSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;
