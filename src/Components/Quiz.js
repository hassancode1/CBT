import React,{useState, useContext} from 'react'
import { Questions } from "../Helpers/QuestionBank"
import {QuizContext } from "../Helpers/Context"
import "../App.css"
 function Quiz() {
   const [currQuestion , setcurrQuestion] = useState(0)
   const [optionChosen, setoptionChosen] = useState("")
const{ score, setScore, setgameState} = useContext(QuizContext)

const nextQuestion =()=>{
  if(Questions[currQuestion].answer === optionChosen){
    setScore(score + 1)
  }

  setcurrQuestion(currQuestion + 1)
}
const finishQuiz=()=>{
  if (Questions[currQuestion].answer === optionChosen) {
    setScore(score + 1);
  }
  setgameState("endScreen");
}

  return (
    <div className='Quiz'>
<h1>{Questions[currQuestion].prompt}</h1>
<div className="options">
 <div> <span>A</span> <button onClick={() => setoptionChosen("A")}>{Questions[currQuestion].OptionA}</button></div>
 <div> <span>B</span> <button  onClick={() => setoptionChosen("B")}>{Questions[currQuestion].OptionB}</button></div>
 <div>  <span>C</span><button  onClick={() => setoptionChosen("C")}>{Questions[currQuestion].OptionC}</button></div>
 <div>  <span>D</span><button  onClick={() => setoptionChosen("D")}>{Questions[currQuestion].OptionD}</button></div>
</div>

{currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  )
}
export default Quiz;