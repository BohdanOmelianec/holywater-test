import localforage from "localforage";
import defaultData from "../resources/data.json";

class QuizService {
    
  initQuiz = async () => {
    const dbData = await localforage.getItem("quizData");
    const email = await localforage.getItem("email");
    const locale = await localforage.getItem("locale");

    if(dbData) {
      const curQuestion = dbData.find(q => q.answer === null);

      return {
        currentQuestion: curQuestion?.number ?? 1,
        questionsLength: dbData.length,
        email,
        locale: locale ?? 'en',
        initRoute: curQuestion ? `quiz/${curQuestion.number}` : email ? '/success' : '/email',
      }

    } else {
      await localforage.setItem("quizData", defaultData);
      return {
        currentQuestion: 1,
        questionsLength: defaultData.length,
        email,
        locale: locale ?? 'en',
        initRoute: 'quiz/1',
      }
    }
  }

  changeQuizLanguage = async (data, lng) => {
    await localforage.setItem("quizData", data);
    await localforage.setItem("locale", lng);
  }

  getQuestion = async (num) => {
    const dbData = await localforage.getItem("quizData");
    return dbData?.find(q => q.number === num);
  }

  setAnswer = async (num, answer) => {
    const dbData = await localforage.getItem("quizData");
    const newData = dbData.map(q => {
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

  setEmail = async (email) => {
    await localforage.setItem("email", email);
  }

  resetQuiz = async () => {
    await localforage.setItem("quizData", defaultData);
    await localforage.setItem("email", '');
  }

}


export default QuizService;