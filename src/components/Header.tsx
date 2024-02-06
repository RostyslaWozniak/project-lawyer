import { NavContextProvider } from "../context/NavContext";
import Logo from "./Logo";
import Navigation from "./Navigation";
import BurgerButton from "./ui/BurgerButton";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-screen backdrop-blur-xl backdrop-brightness-50">
      <div className="content flex h-full items-center justify-between">
        <NavContextProvider>
          <Logo className="scale-75 lg:scale-100" />
          <Navigation />
          <BurgerButton />
        </NavContextProvider>
      </div>
    </header>
  );
};

export default Header;
