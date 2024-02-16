import { useEffect, useState } from "react";
import Header from "../Header";
import Main from "../Main";
import { useLoaderData } from "react-router-dom";
import { Button } from "../shared/Button.styled";
import { Grid } from "./QScreen.styled";
import { useContext } from "react";
import { QuizContext } from "../../context/QuizProvider";
import LoadingScreen from "../LoadingScreen";
import QuizService from "../../service";
import { useTranslation } from 'react-i18next';


function QuestionScreen() {
    const [answer, setAnswer] = useState([]);
    const [lng, setLng] = useState('en');
    const { question, number } = useLoaderData();
    const { questionsLength, onNextClick, onPrevClick, loading } = useContext(QuizContext);
    const { t, i18n } = useTranslation();
    const quizService = new QuizService();

    useEffect(() => {
        setAnswer(question.answer ?? []);
    },[question])

    const changeLanguage = async (lng) => {
        i18n.changeLanguage(lng);
        const newData = i18n.getDataByLanguage(lng);
        await quizService.changeQuizLanguage(newData.translation.quizData);
      }

    const nextHandler = async () => {
        if(+number === 1) {
            await changeLanguage(lng);
        }
        await quizService.setAnswer(+number, answer);

        setAnswer([]);
        onNextClick();
    }

    if(loading) return <LoadingScreen/>;
    
    return (
        <Grid>
            <Header activeQuestion={number} questionsLength={questionsLength} onPrevClick={onPrevClick} />
            <Main
                question={question}
                answer={answer}
                setAnswer={setAnswer}
                setLng={setLng}
            />
            <Button disabled={!answer.length} onClick={nextHandler}>{t('nextButton')}</Button>
        </Grid>
    );
}

export default QuestionScreen;
