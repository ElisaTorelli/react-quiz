import React, {useState} from 'react';
import './App.styles.ts'
import { QuestionState, Difficulty, fetchQuizQuestions } from './commons/API';
import QuestionCard from './components/QuestionCard/QuestionCard';
import { GlobalStyle, Wrapper } from './App.styles';

export type answerObject = {
  question: string,
  answer: string,
  correct: boolean,
  correctAnswer: string,
}


const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  // QUESTION NUMBER USER IS CURRENTLY ON
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)



  // START THE API
  const startTrivia = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false)

  }

  // CHECK ANSWER WHEN USER SELECT OPTION
  const checkAnswerGiven = (e: any) => {
    if(!gameOver){
      //get User's answer
      const answer = e.currentTarget.value;
      //check correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer's correct
      if(correct) setScore((prev) => prev + 1);
      //save answers in user answers array
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correct: correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  // SEND USER TO NEXT QUESTION
  const nextQuestion = () => {
    //go to next question (if is not the last one)
    const nextQuest = number + 1;

    if(nextQuest === TOTAL_QUESTIONS){
      setGameOver(true)
    }else{
      setNumber(nextQuest)
    }
  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>QUIZ APP</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startTrivia}>Start</button>
        ) : null}

        {!gameOver ? <p className='score'>Score: {score}</p> : null}

        {loading ? <p>Loading Questions ...</p> : null}

        {!loading && !gameOver && (
        <QuestionCard 
        // give props
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswerGiven}
        />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className='next' onClick={nextQuestion}>Next Question</button>
        ) : null}
      </Wrapper>
      </>
  );
}

export default App;
