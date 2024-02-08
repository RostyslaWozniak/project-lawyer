import DisplayQuestions from "./DisplayQuestions";
import { FAQContextProvider } from "../../context/FAQContext";
import QuestionsNavigation from "./QuestionsNavigation";

const FAQSection = () => {
  return (
    <FAQContextProvider>
      <section className="my-20 grid gap-10">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Frequently asked questions
        </h2>
        <div className="content flex flex-col items-start justify-between gap-10 xl:flex-row">
          <QuestionsNavigation />
          <DisplayQuestions />
        </div>
      </section>
    </FAQContextProvider>
  );
};

export default FAQSection;
