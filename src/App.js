import React , {useState, useEffect} from 'react';
import './App.css';
import Question from "./components/question";
import generateQuestion from "./Helpers/QuestionGenerator";
import {Points} from "./styles/component";


function App() {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);

  useEffect(() => {
   const data = generateQuestion();
   setQuestion(data);
  
  }, [setQuestion])


  const updateScore = (passed) => {
    if(passed){
      setScore(prev => prev + 1);
    }
    setQuestion(generateQuestion());
    setQuestionNumber(prev => prev + 1);
  }
  return (
    <div className="App">
      <Points>Question passed: {score}</Points>
      <Question data={question} cB={updateScore} qNumber={questionNumber}/>
    </div>
  );
}

export default App;
