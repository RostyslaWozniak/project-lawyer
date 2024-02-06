import { useNavContext } from "../../context/NavContext";
import { darkColor, lightColor } from "../../helpers/globalVariables";

const BurgerButton = () => {
  const { isBurgerNavActive, setIsBurgerNavActive } = useNavContext();
  function handleBurgerButtonClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.stopPropagation();
    setIsBurgerNavActive(!isBurgerNavActive);
  }
  return (
    <button
      className="relative h-[20px] w-[30px] py-3 lg:invisible "
      onClick={handleBurgerButtonClick}
    >
      <span
        className="absolute left-0 top-0 h-[3px] w-full rounded bg-background duration-300"
        style={{
          top: isBurgerNavActive ? "50%" : "0",
          transform: isBurgerNavActive
            ? "translateY(-50%) rotate(-45deg)"
            : "translateY(0) rotate(0)",
          backgroundColor: isBurgerNavActive ? darkColor : lightColor,
        }}
      />
      <span
        className="absolute right-0 top-[50%] h-[3px] w-full translate-y-[-50%] rounded bg-background duration-300"
        style={{
          display: isBurgerNavActive ? "none" : "block",
          backgroundColor: isBurgerNavActive ? darkColor : lightColor,
        }}
      />
      <span
        className="absolute bottom-0 left-0 h-[3px] w-full rounded bg-background duration-300"
        style={{
          bottom: isBurgerNavActive ? "50%" : "0",
          transform: isBurgerNavActive
            ? "translateY(50%) rotate(45deg)"
            : "translateY(0) rotate(0)",
          backgroundColor: isBurgerNavActive ? darkColor : lightColor,
        }}
      />
    </button>
  );
};

export default BurgerButton;
