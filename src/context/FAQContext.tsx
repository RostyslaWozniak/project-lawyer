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

  function handleFilteringQuestions(type: string) {
    setFilteredQuestions(() => {
      setTypeOfQuestions(type);
      if (type === "all") return FAQData;
      return FAQData.filter((question) => question.type === type);
    });
  }
  return (
    <FAQContext.Provider
      value={{
        filteredQuestions,
        typeOfQuestions,
        handleFilteringQuestions,
      }}
    >
      {children}
    </FAQContext.Provider>
  );
}
