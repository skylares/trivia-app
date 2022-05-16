import React from "react";

const Question = ({apiData}) => {

  const questions = () => apiData.map(trivia => (
    <div className="question"key={trivia.correct_answer}>
      <h1>{trivia.question}</h1>
      <p>{trivia.correct_answer}</p>
      <p>{trivia.incorrect_answers[0]}</p>
      <p>{trivia.incorrect_answers[1]}</p>
      <p>{trivia.incorrect_answers[2]}</p>
      <hr/>
    </div>
  ));
  
  return (
    questions()
  );
};

export default Question;