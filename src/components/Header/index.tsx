import {
  StyledHeader,
  Counter,
  ArrowBox,
  Arrow,
  Numbers,
  Progress,
} from "./Header.styled";
import arrow from "../../assets/arrow.svg";

interface Props {
  questionsLength: number,
  activeQuestion: number,
  onPrevClick: () => void
}

const Header = ({ questionsLength, activeQuestion, onPrevClick }: Props) => {

  return (
    <StyledHeader>
      <Counter>
        {activeQuestion > 1 && 
          <ArrowBox onClick={onPrevClick}>
            <Arrow src={arrow} alt="arrow back" />
          </ArrowBox>
        }
        <Numbers>
          <span className="accent">{activeQuestion}</span>
          <span>/{questionsLength}</span>
        </Numbers>
      </Counter>
      <Progress>
          <Progress $bg="var(--pink)" $width={`calc((100% / 5) * ${activeQuestion})`} />
      </Progress>
    </StyledHeader>
  );
}
  
  export default Header;
  