import './App.css';
import React, { useState } from 'react';
import ScoreAndLives from './components/ScoreAndLives';
import EnterTheMovie from './components/EnterTheMovie';
import GameOver from './components/GameOver';


function App()  {
  let [lifes, setLifes] = useState(3);
  let [score, setScore] = useState(0);

  const callbackFunction = isGuess => isGuess ? setScore(score += 100): setLifes(lifes -= 1);
  const callbackFunctionRestartGame = () => {
    setLifes(3);
    setScore(0);
  };

  
    document.body.style = "background: linear-gradient(90deg, rgba("+255+","+255+","+255+","+1+") 0%, rgba("+200+","+200+","+200+","+1+") 100%);  color: white;      ";

    return (
      lifes !== 0? 
      <div >
        <ScoreAndLives lifes={lifes} score={score}/>
        <EnterTheMovie parentCallback = {callbackFunction}/>
      </div>:
      <div >
        <div className="ScoreAndLives"> 
          <div className="text-center">
            Puntaje Final: {score}
          </div>
        </div>
        <GameOver parentCallback = {callbackFunctionRestartGame}/>
      </div>
      
  );
}

export default App;
