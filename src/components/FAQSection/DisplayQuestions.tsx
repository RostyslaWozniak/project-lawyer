import QuestionItem from "./QuestionItem";
import { useFAQContext } from "../../context/FAQContext";

const DisplayQuestions = () => {
  const { filteredQuestions } = useFAQContext();

  return (
    <ul className="mx-auto flex w-half-content flex-col justify-start gap-5">
      {filteredQuestions.map((question) => (
        <QuestionItem key={question.id} {...question} />
      ))}
    </ul>
  );
};

export default DisplayQuestions;
