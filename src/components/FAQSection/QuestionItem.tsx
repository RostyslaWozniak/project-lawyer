import { useState } from "react";
import chevronIcon from "/src/assets/images/icons/chevron.svg";
import { motion } from "framer-motion";

type QuestionItemProps = {
  question: string;
  answer: string;
};

const QuestionItem = ({ question, answer }: QuestionItemProps) => {
  const [isQuestionActive, setIsQuestionActive] = useState(false);

  function handleToggleChevronQuestion(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    e.stopPropagation();
    setIsQuestionActive(false);
    setIsQuestionActive(!isQuestionActive);
  }

  function handleClickOnQuestion(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) {
    e.stopPropagation();
    setIsQuestionActive(true);
  }

  document.body.addEventListener("click", () => setIsQuestionActive(false));
  return (
    <motion.li
      layout
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      onClick={handleClickOnQuestion}
    >
      <div
        style={{
          cursor: isQuestionActive ? "default" : "pointer",
        }}
        className=" flex flex-col gap-2 overflow-hidden duration-300"
      >
        <div className="flex w-full items-start justify-between">
          <p className="text-lg font-medium sm:text-2xl">{question}</p>
          <button
            onClick={handleToggleChevronQuestion}
            className="min-w-5 py-2 md:px-5"
          >
            <img
              src={chevronIcon}
              className="duration-300 md:scale-[120%]"
              style={{
                rotate: isQuestionActive ? "180deg" : "0deg",
              }}
            />
          </button>
        </div>
        <p
          className="text-sm duration-300 sm:text-base"
          style={{
            height: isQuestionActive ? "80px" : "0px",
            cursor: isQuestionActive ? "default" : "pointer",
          }}
        >
          {answer}
        </p>
      </div>
    </motion.li>
  );
};

export default QuestionItem;
