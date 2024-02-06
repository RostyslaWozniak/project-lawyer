import { useFAQContext } from "../../context/FAQContext";
import { typeOfQuestion } from "../../data/FAQData";
import AnimateElement from "../ui/AnimateElement";
import Button from "../ui/Button";

const QuestionsNavigation = () => {
  const { handleFilteringQuestions, typeOfQuestions } = useFAQContext();
  return (
    <div className="mx-auto flex w-half-content flex-col items-center gap-5">
      {typeOfQuestion.map(({ id, type, name }) => (
        <AnimateElement className="w-[min(300px,100%)]" delay={id * 0.1}>
          <Button
            key={name}
            onClick={() => handleFilteringQuestions(type)}
            className={
              typeOfQuestions !== type
                ? "w-full bg-secondary capitalize text-dark"
                : "w-full bg-accent capitalize"
            }
          >
            {name}
          </Button>
        </AnimateElement>
      ))}
    </div>
  );
};

export default QuestionsNavigation;
