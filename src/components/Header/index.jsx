import {
  StyledHeader,
  Counter,
  ArrowBox,
  Arrow,
  Numbers,
  Progress,
} from "./Header.styled";

const Header = ({ questionsLength, activeQuestion, onPrevClick }) => {

  return (
    <StyledHeader>
      <Counter>
        {activeQuestion > 1 && 
          <ArrowBox onClick={onPrevClick}>
            <Arrow src="/arrow.svg" alt="arrow back" />
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
  