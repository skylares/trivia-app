import React from "react";
import { v4 as uuidv4 } from 'uuid';

const Question = ({apiData}) => {
  

  const questions = () => apiData.map(trivia => {
    const answers = [...trivia.incorrect_answers, trivia.correct_answer];
    answers.sort(() => Math.random()> 0.5 ? -1 : 1);

    const ansMap = answers.map(ans => <p className="question--answers"key={uuidv4()}>{ans}</p>);

    return (
      <div className="question" key={uuidv4()}>
        <h2 className="question--question">{trivia.question}</h2>
        <div className="question--answers-container">{ansMap}</div>
        <hr/>
      </div>
    )
  });
  
  return (
    questions()
  );
};

export default Question;