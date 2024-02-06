import { Link } from "react-router-dom";
import AnimateElement from "./ui/AnimateElement";
import Button from "./ui/Button";
import image1 from "/src/assets/images/services-1.jpg";
import image2 from "/src/assets/images/services-2.jpg";
import image3 from "/src/assets/images/services-3.jpg";
const servicesData = [
  {
    id: 1,
    imgUrl: image1,
    title: "Contract Drafting and Review",
    text: "We offer efficient, effective contract drafting and review services to help lawyers ensure their clients get the best agreements.",
    link: "services",
  },
  {
    id: 2,
    imgUrl: image2,
    title: "Corporate Law Advice",
    text: "Our corporate law advice service offers tailored solutions to ensure your business is compliant with all relevant legislation.",
    link: "services",
  },
  {
    id: 3,
    imgUrl: image3,
    title: "Business Formation and Operation",
    text: "With our lawyer promotion service, you can take advantage of powerful online presence to increase your reach and visibility.",
    link: "services",
  },
];
const ServicesSection = () => {
  return (
    <section>
      <h2 className="my-20 hidden text-center text-3xl font-semibold sm:block md:text-4xl">
        Services
      </h2>
      {servicesData.map(({ id, imgUrl, title, text, link }) => (
        <div
          key={id}
          className="content flex flex-col items-center px-0 sm:my-5 lg:flex-row"
        >
          <AnimateElement delay={0.2}>
            <img src={imgUrl} alt={title} className="mx-auto w-half-content" />
          </AnimateElement>
          <AnimateElement
            delay={0.2}
            className="mx-auto flex w-half-content min-w-[50vw] flex-col items-start gap-10 p-5 sm:px-10"
          >
            <h3 className="text-2xl text-[black] sm:text-3xl">{title}</h3>
            <p className="text-sm sm:text-lg">{text}</p>
            <Button className="overflow-hidden hover:bg-light hover:text-dark">
              <Link className="w-full p-16" to={link}>
                Learn more
              </Link>
            </Button>
          </AnimateElement>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
