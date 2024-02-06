import { lgWidth } from "../../helpers/globalVariables";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AnimateElement from "../ui/AnimateElement";

type ContactItemProps = {
  id: number;
  name: string;
  value: string;
  icon: string;
  lightIcon: string;
};

const ContactItem = ({
  id,
  name,
  value,
  icon,
  lightIcon,
}: ContactItemProps) => {
  const { windowWidth } = useWindowDimensions();

  return (
    <AnimateElement delay={id * 0.1}>
      <li className="flex items-center gap-10">
        <img
          src={windowWidth > lgWidth ? lightIcon : icon}
          alt={`${name} icon`}
          className="w-[40px] lg:w-[50px]"
        />

        <div>
          <p className="font-bold">{name}</p>
          <p className="italic">{value}</p>
        </div>
      </li>
    </AnimateElement>
  );
};

export default ContactItem;
