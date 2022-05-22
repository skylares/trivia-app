import React from "react";
import Question from "../components/Question";
const he = require('he');

const Trivia = ({apiData, setApiData, apiUrl, setTrivia}) => {

  const [checkedAnswers, setCheckedAnswers] = React.useState(false);

  React.useEffect(() => {
    const apiCaller = async() => {
      const result = await fetch(apiUrl());
      const data = await result.json();

      const stringifiedData = JSON.stringify(data.results).replaceAll("&quot;", '\\"');
      const fixedData = JSON.parse(he.decode(stringifiedData));

      const quesAndAns = fixedData.map(triviaObj => {
        const answers = [...triviaObj.incorrect_answers, triviaObj.correct_answer];
        answers.sort(() => Math.random()> 0.5 ? -1 : 1);
        
        return {
          "question": triviaObj.question,
          "answers": answers,
          "correctAnswer": triviaObj.correct_answer
        }
      });
      setApiData(quesAndAns);
    };
    apiCaller();
  }, []);

  const answerChecker = () => {
    setCheckedAnswers(prevCheckedAnswers => ! prevCheckedAnswers);
  };

  const playAgain = () => {
    setTrivia(prevTrivia => !prevTrivia);
    setCheckedAnswers(prevCheckedAnswers => ! prevCheckedAnswers);
  };

  if (apiData.length) {
    return (
      <section className="trivia">
        <Question apiData={apiData} checkedAnswers={checkedAnswers} />
        <button 
          onClick={checkedAnswers ? playAgain : answerChecker}
          >{checkedAnswers ? "Play again?" : "Check answers"}
        </button>
      </section>
    );
  }
};

export default Trivia;