import { Button } from "../shared/Button.styled";
import { QuestionDescription } from "../shared/Question.styled";
import { Title, StyledMain, TitleArea, Grid, Icon, Download } from "./Success.styled";
import { useContext } from "react";
import { QuizContext } from "../../context/QuizProvider";
import { useTranslation } from "react-i18next";
import localforage from "localforage";


function SuccessScreen() {
    const { reset } = useContext(QuizContext);
    const { t } = useTranslation();

    const downloadAnswers = async () => {
        const quizData = await localforage.getItem('quizData');
        if (!quizData || quizData.length === 0) {
          console.log('No data to download');
          return;
        }
      
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "order\t title\t type\t answer\n";

        quizData.forEach(item => {
            const order = item.number;
            const title = item.question;
            const type = item.type;
            const answer = Array.isArray(item.answer) ? item.answer.join(', ') : item.answer;
            const row = `${order}\t ${title}\t ${type}\t ${answer}`;
            csvContent += row + "\r\n";
          });
      
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "quiz_answers.xlsx");
        document.body.appendChild(link);
        link.click();
      };

    return (
        <Grid>
            <StyledMain>
                <TitleArea>
                    <Title>{t('thankYou')}</Title>
                    <QuestionDescription>{t('thankYouMessage')}</QuestionDescription>
                </TitleArea>
                <Icon src="/checkmark.svg" alt="" />
            </StyledMain>
            <Download onClick={downloadAnswers}>
                <img src="/download.svg" alt="download icon" />
                <span>{t('downloadButton')}</span>
            </Download>
            <Button onClick={reset}>{t('retakeQuizButton')}</Button>
        </Grid>
    );
}

export default SuccessScreen;
