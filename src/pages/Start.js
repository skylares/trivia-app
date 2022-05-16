import React from "react";

const Start = (props) => {

  const {amount, category, difficulty} = props.formData;

  function handleFormChange({target: {name, value}}) {
    props.setFormData(prevFormData => (
      {...prevFormData, [name]: value}
    ));
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    props.setTrivia(prevTrivia => !prevTrivia);
  }

  return(
    <section className="start">
      <h1 className="start--title">Quizzical</h1>
      <h3 className="start--description">The best quiz game this side of the Mississppi</h3>

      <form onSubmit={handleFormSubmit}>
      <label>
          Number of Questions:
          <br/>
          <select 
            id="amount" 
            value={amount} 
            name="amount"
            onChange={handleFormChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="50">Marathon Mode</option>
          </select>
        </label>
        <br/>
        <label>
          Select Difficulty:
          <br/>
          <select 
            id="difficulty" 
            value={difficulty} 
            name="difficulty"
            onChange={handleFormChange}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br/>
        <label>
          Select Category:
          <br/>
          <select 
            id="category" 
            value={category} 
            name="category"
            onChange={handleFormChange}
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="11">Film</option>
            <option value="12">Music</option>
            <option value="15">Video Games</option>
            <option value="17">Science & Nature</option>
            <option value="19">Mathematics</option>
            <option value="18">Computers</option>
            <option value="27">Animals</option>
            <option value="25">Art</option>
            <option value="24">Politics</option>
            <option value="23">History</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </select>
        </label>
        <br/>
        <button className="start--button">Start quiz</button>
      </form>

    </section>
    
  );
};

export default Start;