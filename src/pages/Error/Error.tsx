import { Link } from "react-router-dom";
import bgImage from "../../assets/images/background/contact-bg.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { lgWidth } from "../../helpers/globalVariables";
const Error = () => {
  const { windowWidth } = useWindowDimensions();
  const background = windowWidth > lgWidth ? bgImage : null;
  return (
    <section
      className="mt-20 grid place-items-center bg-secondary text-light"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex w-[min(600px,100%)] flex-col items-center gap-10 py-10 text-center text-xl text-dark lg:border-2 lg:px-14 lg:text-light lg:backdrop-blur-md lg:backdrop-brightness-75">
        <h1 className="text-8xl">404</h1>
        <p>Sorry, the page you're looking for cannot be found.</p>
        <p>
          Visit our{" "}
          <Link to="/" className="underline">
            homepage
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Error;
