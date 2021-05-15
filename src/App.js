import React , {useState, useEffect} from 'react';
import './App.css';
import Question from "./components/question";
import generateQuestion from "./Helpers/QuestionGenerator";
import {Points, Hint} from "./styles/component";


function App() {
  const [question, setQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [showHint, setHint] = useState(false);

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
      <Points>Question passed: {score} <Hint onClick={()=> setHint(true)}>Hint</Hint></Points>
      <Question data={question} cB={updateScore} qNumber={questionNumber} hint={{showHint, setHint}}/>
    </div>
  );
}

export default App;
