import React from "react";

interface Props {
  question: string;
  answers: string[];
  cb: any;
  userAnswer: any;
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
            <button value={ans} disabled={userAnswer} onClick={cb}>
              <span dangerouslySetInnerHTML={{ __html: ans }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
