import React,{useState, useContext} from "react";
import EndScreen from "./Components/EndScreen";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Context"
import  "./App.css"
function App() {
  const [gameState, setgameState] = useState("menu")
  const [score, setScore] =  useState(0)
  return (
    <div className="App">
<h1>take test</h1>
<QuizContext.Provider value={{ gameState, setgameState, score, setScore}}>
{gameState === "menu" && <MainMenu/>}
{gameState === "quiz" && <Quiz/>}
{gameState === "endScreen" && <EndScreen/>}
</QuizContext.Provider>
    </div>
  );
}
 
export default App;
