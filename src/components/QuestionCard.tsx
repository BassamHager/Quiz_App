import React from "react";
// styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
// types
import { AnswerObj } from "../App";

interface Props {
  question: string;
  answers: string[];
  cb: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObj | undefined;
  questionNr: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  cb,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <p>
        Question {questionNr} / {totalQuestions}{" "}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans) => (
          <ButtonWrapper
            key={ans}
            correct={userAnswer?.correctAnswer === ans}
            userClicked={userAnswer?.answer === ans}
          >
            <button value={ans} disabled={!!userAnswer} onClick={cb}>
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
