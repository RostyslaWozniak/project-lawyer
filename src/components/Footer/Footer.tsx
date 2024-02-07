import Logo from "../Logo";
import AboutWebDev from "./AboutWebDev";
import Address from "./Address";
import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="bg-accent text-light">
      <div className="content grid grid-cols-1 items-end justify-between gap-10 overflow-hidden py-8 leading-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
        <Logo
          size={{ width: 130, height: 130 }}
          className="-translate-x-10 scale-75 lg:translate-x-0 lg:scale-100"
        />
        <Contact />
        <Address />
        <AboutWebDev />
      </div>
    </footer>
  );
};

export default Footer;
