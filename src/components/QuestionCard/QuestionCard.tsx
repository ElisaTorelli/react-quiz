import React from 'react'
import {answerObject} from '../../App'

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: answerObject | undefined,
    questionNumber: number,
    totalQuestions: number,
}

const QuestionCard: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions}) => {
    return(
        <div>
            <p className='number'>Question: {questionNumber} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button title='btn' disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard