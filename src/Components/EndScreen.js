import React,{ useContext} from 'react'
import { Questions } from "../Helpers/QuestionBank"
import {QuizContext } from "../Helpers/Context"
import "../App.css"

function EndScreen() {
  const {score} = useContext(QuizContext)
  return (
    <div>
<h1>finished test </h1>
<h2> {score} / {Questions.length} </h2>
    </div>
  )
}
export default EndScreen