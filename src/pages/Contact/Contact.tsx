import { useEffect } from "react";
import ContactSection from "../../components/ContactSection/ContactSection";

const Contact = () => {
  useEffect(() => {
    scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className="mt-20">
      <ContactSection />
    </div>
  );
};

export default Contact;
