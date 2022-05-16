import React from "react";
import Start from "./pages/Start";
import Trivia from "./pages/Trivia";

const App = () => {

  const [trivia, setTrivia] = React.useState(true);

  const [apiData, setApiData] = React.useState([]);
  
  const [formData, setFormData] = React.useState(
    {
      amount: "5",
      category: "",
      difficulty: "",
    }
  );

  function apiUrlGenerator() {
    const {amount, difficulty, category} = formData;
    let apiUrl = `https://opentdb.com/api.php?amount=${amount}`;
    if (category.length) apiUrl += `&category=${category}`;
    if (difficulty.length) apiUrl += `&difficulty=${difficulty}`;
    return apiUrl + "&type=multiple";
  }
  
  return(
    <main className={trivia ? "container start" : "container trivia"}>
      {
      trivia
        ? <Start formData={formData} setFormData={setFormData} setTrivia={setTrivia}/> 
        : <Trivia apiData={apiData} setApiData={setApiData} apiUrl={apiUrlGenerator}/>
      }
    </main>
  );
}

export default App;   