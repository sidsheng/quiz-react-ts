import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper, Wrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNo: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNo,
    totalQuestions
}) => (
    <Wrapper>
    <div>
        <p className="number">
            Question: {questionNo} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <ButtonWrapper key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}>
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                </ButtonWrapper>
            ))}
        </div>
    </div>
    </Wrapper>
);

export default QuestionCard;