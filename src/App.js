import React , {useState, useEffect} from 'react';
import './App.css';
import Question from "./components/question";
import generateQuestion from "./Helpers/QuestionGenerator";

function App() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
   const data = generateQuestion();
   setQuestion(data);
  
  }, [setQuestion])
  return (
    <div className="App">
      <Question data={question} cB={()=> setQuestion(generateQuestion())}/>
    </div>
  );
}

export default App;
