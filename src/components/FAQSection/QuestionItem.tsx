import chevronIcon from "/src/assets/images/icons/chevron.svg";
import { motion } from "framer-motion";
import { useFAQContext } from "../../context/FAQContext";

type QuestionItemProps = {
  id: number;
  question: string;
  answer: string;
};

const QuestionItem = ({ id, question, answer }: QuestionItemProps) => {
  const { activeQuestionId, handleClickOnQuestion } = useFAQContext();
  const isActive = activeQuestionId === id;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      onClick={(e) => handleClickOnQuestion(e, id)}
    >
      <div className=" flex cursor-pointer flex-col gap-2 overflow-hidden duration-300">
        <div className="flex w-full items-start justify-between">
          <p className="text-lg font-medium sm:text-2xl">{question}</p>
          <img
            src={chevronIcon}
            className="min-w-5 cursor-pointer py-2 duration-300 md:scale-[120%] md:px-5"
            style={{
              rotate: isActive ? "180deg" : "0deg",
            }}
          />
        </div>
        <p
          onClick={(e) => e.stopPropagation()}
          className="cursor-text text-sm duration-500 ease-in-out sm:text-base"
          style={{
            height: isActive ? "50px" : "0px",
          }}
        >
          {answer}
        </p>
      </div>
    </motion.li>
  );
};

export default QuestionItem;
