import React from "react";
import Question from "../components/Question";
const he = require('he');

const Trivia = ({apiData, setApiData, apiUrl}) => {

  React.useEffect(() => {
    const apiCaller = async() => {
      const result = await fetch(apiUrl());
      const data = await result.json();
      const stringifiedData = JSON.stringify(data.results).replaceAll("&quot;", '\\"');
      const fixedData = JSON.parse(he.decode(stringifiedData));
      setApiData(fixedData);
    };
    apiCaller();
  }, []);

  if (apiData.length) {
    return (
      <section className="trivia">
        <Question apiData={apiData} />
        <button>Check answers</button>
      </section>
    );
  }
};

export default Trivia;