import familyIcon from "/src/assets/images/icons/family-icon.svg";
import inheritanceIcon from "/src/assets/images/icons/inheritance-icon.svg";
import lawBookIcon from "/src/assets/images/icons/law-book.svg";
import hummerIcon from "/src/assets/images/icons/hummer-icon.svg";
import AnimateElement from "./ui/AnimateElement";
const casesData = [
  {
    id: 1,
    title: "Family law",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: familyIcon,
  },
  {
    id: 2,
    title: "Inheritance and real estate law",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: inheritanceIcon,
  },
  {
    id: 3,
    title: "Criminal law",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: lawBookIcon,
  },
  {
    id: 4,
    title: "Labor and social security law",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: hummerIcon,
  },
];
const CasesWeDealWithSection = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="mx-auto grid w-[min(1500px,100%)] grid-cols-1 place-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {casesData.map(({ id, title, text, icon }) => (
          <AnimateElement
            key={id}
            className="flex w-[300px] flex-col items-center  gap-5 text-center"
            delay={id * 0.1}
          >
            <img src={icon} alt={`${title} icon`} />
            <h3 className="heading-5">{title}</h3>
            <p className="text-sm md:text-base">{text}</p>
          </AnimateElement>
        ))}
      </div>
    </section>
  );
};

export default CasesWeDealWithSection;
