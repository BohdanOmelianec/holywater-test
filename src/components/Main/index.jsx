import { QuestionArea, OptionsArea, Option, StyledMain, Checkbox } from "./Main.styled";
import { Question, QuestionDescription } from "../shared/Question.styled";

const LANGUAGE = {
  'English': "en", 
  "French": "fr", 
  "German": "de", 
  "Spanish": "es" 
}

const Main = ({ question, answer, setAnswer, setLng }) => {

  const onChangeHandler = (e) => {
    if(question.number === 1) {
      setLng(LANGUAGE[e.target.value]);
    }

    switch (question.type) {
      case 'single-select':
        setAnswer([e.target.value])
        break;
    
      case 'multiple-select':
        if(e.target.checked) {
          const newAnswer = [...answer, e.target.value];
          setAnswer(newAnswer);
        } else {
          const newAnswer = [...answer].filter(a => a !== e.target.value);
          setAnswer(newAnswer);
        }
        
        break;
    
      case 'bubble':
        if(e.target.checked) {
          const newAnswer = [...answer, e.target.value];
          setAnswer(newAnswer);
        } else {
          const newAnswer = [...answer].filter(a => a !== e.target.value);
          setAnswer(newAnswer);
        }
        
        break;
    
      default:
        break;
    }
  } 

    return (
      <StyledMain>
        <QuestionArea>
            <Question>{question.question}</Question>
            {question.description && <QuestionDescription>{question.description}</QuestionDescription>}
        </QuestionArea>
        <OptionsArea>
            {question.options.map(opt => (
              <Option key={opt}>
                <input
                  name="checkbox"
                  defaultChecked={question.answer?.includes(opt)}
                  type={question.type === "single-select" ? "radio" : "checkbox"}
                  value={opt}
                  onChange={onChangeHandler}
                  style={{display: "none"}}
                />
                <span>{opt}</span>
                {question.type !== "single-select" && 
                  <Checkbox className="checkbox">
                    <svg
                      fill="transparent"
                      height="13px"
                      width="13px"
                      viewBox="0 0 490 490"
                    >
                      <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon>
                    </svg>
                  </Checkbox>
                }
              </Option>
            ))}
        </OptionsArea>
      </StyledMain>
    );
  }
  
  export default Main;
  