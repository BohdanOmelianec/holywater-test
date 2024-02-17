import { useState } from "react";
import { Button } from "../shared/Button.styled";
import { Question, QuestionDescription } from "../shared/Question.styled";
import { Grid, Input, InputBox, StyledMain, TitleArea } from "./Email.styled";
import { useNavigate } from "react-router-dom";
import QuizService from "../../service";
import { Trans, useTranslation } from "react-i18next";

const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
function EmailScreen() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const quizService = new QuizService();

    const inputHandler = (e) => {
        setError(false);
        const value = e.target.value;
        setEmail(value);
    }

    const submit = async (e) => {
        e.preventDefault();
        const isValid = pattern.test(email);

        if(isValid) {
            await quizService.setEmail(email);
            navigate("/success");
        } else {
            setError(true);
        }
    }

    return (
        <Grid>
            <StyledMain>
                <TitleArea>
                    <Question>{t('email')}</Question>
                    <QuestionDescription>{t('emailMessage')}</QuestionDescription>
                </TitleArea>
                <InputBox>
                    <Input
                        type="email"
                        placeholder={t('emailPlaceholder')}
                        value={email}
                        onChange={inputHandler}
                        style={{outline: error ? "1px solid red" : ""}}
                    />
                    {error && <div>{t('emailError')}</div>}
                </InputBox>
                <QuestionDescription sx={{"font-size": "12px"}}>
                    <Trans i18nKey="emailAgreement">
                        By continuing I agree with <span className="accent">Privacy policy</span> and <span className="accent">Terms of use</span>.
                    </Trans>
                </QuestionDescription>
            </StyledMain>
            <Button disabled={error || !email} type="submit" onClick={submit}>{t('nextButton')}</Button>
        </Grid>
    );
}

export default EmailScreen;
