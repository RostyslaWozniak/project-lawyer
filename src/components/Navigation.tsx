import { NavLink } from "react-router-dom";
import { useNavContext } from "../context/NavContext";
import { lgWidth } from "../helpers/globalVariables";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Address from "./Footer/Address";
import Contact from "./Footer/Contact";
import Logo from "./Logo";
import AnimateElement from "./ui/AnimateElement";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Services", path: "services" },
  { id: 3, name: "Contact", path: "contact" },
];
const Navigation = () => {
  const { isBurgerNavActive } = useNavContext();
  const { windowWidth } = useWindowDimensions();
  return (
    <nav
      className="absolute left-0 h-dvh w-screen bg-gradient-to-b from-primary to-accent py-20 text-2xl font-bold text-dark duration-300 lg:static lg:block lg:h-5 lg:w-[350px] lg:bg-none lg:p-0 lg:text-base lg:font-normal lg:text-light"
      style={{
        top: isBurgerNavActive ? "0px" : "-1000px",
      }}
    >
      <ul className="flex flex-col gap-16 text-center lg:flex-row">
        {navigationData.map(({ id, name, path }) => (
          <li key={id}>
            <AnimateElement delay={id * 0.1} repeat>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                {name}
              </NavLink>
            </AnimateElement>
          </li>
        ))}
      </ul>
      {windowWidth < lgWidth && (
        <div className=" absolute bottom-0 left-0 mt-10 grid gap-5 p-3">
          <Logo size={{ width: 120, height: 120 }} isNameVisible />
          <Contact className="text-base font-normal text-light" />
          <Address className="text-base font-normal text-light" />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
