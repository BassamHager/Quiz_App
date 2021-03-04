import React from "react";
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
    <div className="number">
      <p>
        Question {questionNr} / {totalQuestions}{" "}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((ans) => (
          <div key={ans}>
            <button value={ans} disabled={!!userAnswer} onClick={cb}>
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
