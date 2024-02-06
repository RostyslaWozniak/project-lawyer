import backgroundImg from "/src/assets/images/background/contact-bg.jpg";
import Schedule from "./Schedule";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url("${backgroundImg}")`,
        backgroundSize: "cover",
        backgroundPositionX: "left",
      }}
    >
      <div className="content flex flex-col items-center justify-between gap-5 bg-secondary px-5 py-10 lg:flex-row lg:bg-none lg:py-28">
        <Schedule />
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactSection;
