import React from "react";
import Start from "./pages/Start";
import Trivia from "./pages/Trivia";

const App = () => {

  const [triviaScreen, setTriviaScreen] = React.useState(true);
  const [formData, setFormData] = React.useState(
    {
      amount: "5",
      category: "",
      difficulty: "",
    }
  );

  

  return(
    <main>
      {triviaScreen  
        ? <Start formData={formData} setFormData={setFormData}/> 
        : <Trivia />
      }
    </main>
  );
}

export default App;   



// const [trivia, setTrivia] = React.useState([]);
//
// React.useEffect(() => {
//   const triviaApi = async() => {
//     let result = await fetch("https://opentdb.com/api.php?amount=10");
//     let data = await result.json();
//     const mapped = await data.results.map(triv => {
//       let correctedQuestion = triv.question.replaceAll("&quot;", '"');
//       let correctedAnswer = triv.correct_answer.replaceAll("&quot;", '"')
//       return(
//         <div>
//           <h1>Question: {correctedQuestion}</h1>
//           <h1>Answer: {correctedAnswer}</h1>
//           <br />
//         </div>
//       );
//     });
//     setTrivia(mapped);
//   };
//   triviaApi();
// }, []);