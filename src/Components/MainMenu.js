
import React, {useContext} from 'react'
import {QuizContext } from "../Helpers/Context"
import "../App.css"
function MainMenu() {
    const {gameState, setgameState} = useContext(QuizContext)
  return (
    <div className='Menu'>
     
       <button onClick={() => {setgameState("quiz")}}>start test</button>
    </div>
  )
}
export default MainMenu