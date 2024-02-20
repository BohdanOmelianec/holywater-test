import localforage from "localforage";
import defaultData from "../resources/data.json";
import { IQuestion } from "types";

interface InitData {
  currentQuestion: number,
  questionsLength: number,
  locale: string,
  initRoute: string,
}

class QuizService {
    
  initQuiz = async (): Promise<InitData> => {
    const dbData = await localforage.getItem<IQuestion[]>("quizData");
    const email = await localforage.getItem<string>("email");
    const locale = await localforage.getItem<string>("locale");

    if(dbData) {
      const curQuestion = dbData.find(q => q.answer === null);

      return {
        currentQuestion: curQuestion?.number ?? 1,
        questionsLength: dbData.length,
        locale: locale ?? 'en',
        initRoute: curQuestion ? `quiz/${curQuestion.number}` : email ? '/success' : '/email',
      }

    } else {
      await localforage.setItem("quizData", defaultData);
      return {
        currentQuestion: 1,
        questionsLength: defaultData.length,
        locale: locale ?? 'en',
        initRoute: 'quiz/1',
      }
    }
  }

  changeQuizLanguage = async (data: string, lng: string) => {
    await localforage.setItem("quizData", data);
    await localforage.setItem("locale", lng);
  }

  getQuestion = async (num: number): Promise<IQuestion | undefined> => {
    const dbData = await localforage.getItem<IQuestion[]>("quizData");
    return dbData?.find(q => q.number === num);
  }

  setAnswer = async (num: number, answer: string[]) => {
    const dbData = await localforage.getItem<IQuestion[]>("quizData");
    const newData = dbData?.map(q => {
      if(q.number === num) {
        return {
          ...q,
          answer: answer
        }
      }
      return q;
    });

    await localforage.setItem("quizData", newData);
  }

  setEmail = async (email: string) => {
    await localforage.setItem("email", email);
  }

  resetQuiz = async () => {
    await localforage.setItem("quizData", defaultData);
    await localforage.setItem("email", '');
  }

}


export default QuizService;