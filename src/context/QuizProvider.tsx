import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizService from "../service";
import { useTranslation } from "react-i18next";


interface DefaultValues  {
  activeQuestion: number,
  questionsLength: number,
  onNextClick: () => void,
  onPrevClick: () => void,
  loading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  reset: () => void,
}

const defaultValues: DefaultValues = {
  activeQuestion: 1,
  questionsLength: 0,
  onNextClick: () => {},
  onPrevClick: () => {},
  loading: false,
  setLoading: () => {},
  reset: () => {},
}
export const QuizContext = createContext(defaultValues);

const QuizProvider = ({ children }: React.PropsWithChildren) => {
  const [questionsLength, setQuestionsLength] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const quizService = new QuizService();

  const init = async () => {
    const { currentQuestion, questionsLength, locale, initRoute } = await quizService.initQuiz();

    i18n.changeLanguage(locale);
    setQuestionsLength(questionsLength);
    setActiveQuestion(currentQuestion);
    navigate(initRoute);
  }

  useEffect(() => {
    init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const onNextClick = () => {
    if(activeQuestion === questionsLength) {
      setLoading(true);
    } else {
      setActiveQuestion(prev => prev + 1)
      navigate(`/quiz/${activeQuestion + 1}`)
    }
  }

  const onPrevClick = () => {
    if(activeQuestion === 1) {
      return
    } else {
      setActiveQuestion(prev => prev - 1)
      navigate(`/quiz/${activeQuestion - 1}`)
    }
  }

  const reset = async () => {
    await quizService.resetQuiz();
    await init();
}


  const value = {
    activeQuestion,
    questionsLength,
    onNextClick,
    onPrevClick,
    loading,
    setLoading,
    reset,
  }

  return (
      <QuizContext.Provider value={value}>
          {children}
      </QuizContext.Provider>
  )
}

export default QuizProvider;