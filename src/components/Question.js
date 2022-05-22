import React from "react";

const Question = ({apiData, checkedAnswers}) => {

  const [selectedId, setSelectedId] = React.useState([]); 
  
  const handleClick = (e, i) => {
    setSelectedId(prevSelected => {
      const arr = [...prevSelected];
      if (arr[i] === e.target.id) arr[i] = "";
      else arr[i] = e.target.id;
      return arr;
    });
  } 

  const correctAnswers = () => {
    let correctAns = 0;
    selectedId.forEach((question, index) => {
      if (question === apiData[index].correctAnswer) correctAns += 1;
    });
    return correctAns;
  }

  const questions = () => apiData.map((trivia, qIndex) => {
    
    const ansMap = trivia.answers.map(ans => {

      const checkedAnswerClassName = () => {
        let name = "question--answers";
        if (ans !== trivia.correctAnswer) {
          name += " wrong";
          if (ans === selectedId[qIndex]) name += " selected";
        }
        if (ans === trivia.correctAnswer) {
          name += " correct";
        }
        return name;
      };
      
      return (
        checkedAnswers
          ? 
            <p 
              className ={checkedAnswerClassName()}
              key={ans}
              id={ans}
              >{ans}
            </p> 
          : 
            <p 
              className={selectedId[qIndex] === ans ? "question--answers selected" : "question--answers"}
              key={ans}
              id={ans}
              onClick={(e) => handleClick(e, qIndex)}
              >{ans}
            </p>
    )});

    return (
      <div className="question" key={qIndex}>
        <h2 className="question--question">{trivia.question}</h2>
        <div className="question--answers-container">{ansMap}</div>
        <hr/>
      </div>
    )
  });
  
  return (
    <div>
      {questions()}
      {checkedAnswers ? <h3 className="question--checked">{`You scored ${correctAnswers()}/${apiData.length} correct answers`}</h3> : null}
    </div>
  );
};

export default Question;