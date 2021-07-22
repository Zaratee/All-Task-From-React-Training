import React from 'react';
import '../../App.css';


function ScoreAndLives(props) {
    return (
      <div className="ScoreAndLives">
          <div className="font-face-Encode">
            Vidas: {props.lifes}
          </div>
          <div>
            Puntos: {props.score}
          </div>
      </div>
    );


}

export default ScoreAndLives;
