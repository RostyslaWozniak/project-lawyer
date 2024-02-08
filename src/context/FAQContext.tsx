import { ReactNode, useContext, createContext, useState } from "react";
import { FAQData, allQuestions } from "../data/FAQData";

type FAQContextProviderProps = {
  children: ReactNode;
};

export type FAQContext = {
  filteredQuestions: {
    id: number;
    type: string;
    question: string;
    answer: string;
  }[];
  typeOfQuestions: string;
  activeQuestionId: null | number;
  handleClickOnQuestion: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number,
  ) => void;
  handleFilteringQuestions: (type: string) => void;
};

export const FAQContext = createContext({} as FAQContext);

// eslint-disable-next-line react-refresh/only-export-components
export function useFAQContext() {
  return useContext(FAQContext);
}

export function FAQContextProvider({ children }: FAQContextProviderProps) {
  const [typeOfQuestions, setTypeOfQuestions] = useState(allQuestions);
  const [filteredQuestions, setFilteredQuestions] = useState(FAQData);
  const [activeQuestionId, setActiveQuestionId] = useState<null | number>(null);

  function handleFilteringQuestions(type: string) {
    setFilteredQuestions(() => {
      setTypeOfQuestions(type);
      if (type === "all") return FAQData;
      return FAQData.filter((question) => question.type === type);
    });
  }

  function handleClickOnQuestion(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number,
  ) {
    e.stopPropagation();
    const activeId = filteredQuestions.find(
      (question) => question.id === id,
    )?.id;
    if (activeQuestionId === id) {
      return setActiveQuestionId(null);
    }
    return setActiveQuestionId(activeId || null);
  }

  document.body.addEventListener("click", () => setActiveQuestionId(null));
  return (
    <FAQContext.Provider
      value={{
        filteredQuestions,
        typeOfQuestions,
        activeQuestionId,
        handleFilteringQuestions,
        handleClickOnQuestion,
      }}
    >
      {children}
    </FAQContext.Provider>
  );
}
