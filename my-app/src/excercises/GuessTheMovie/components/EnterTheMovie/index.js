import '../../App.css';
import {React, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  function EnterTheMovie(props) {
      const movies = [
          {id:1, emojis:'🐼🐍🐯🦗🐵🦩', name:'kung fu panda'},
          {id:2, emojis:'🧜‍♀️🐠🦞', name:'la sirenita'},
          {id:3, emojis:'🎮👩🏼👩🏼🤺🤺👩‍👧👨‍👧', name:'juego de gemelas'},
          {id:4, emojis:'🧊🛳👫🏼🌊🏊🏼🏊🏼‍♀️🥶🥶💀💀', name:'titanic'},
          {id:5, emojis:'🐭➡🧑🏼‍🍳🥙', name:'ratatouille'},
          {id:6, emojis:'❤🐶🍜🐶❤', name:'la dama y el vagabundo'},
          {id:7, emojis:'👨👴🚗🕒', name:'volver al futuro'},
          {id:8, emojis:'🌏🐵🦍', name:'planeta de los simios'},
          {id:9, emojis:'🧍‍♂️🕷', name:'el hombre araña'},
          {id:10, emojis:'🤵🦇', name:'batman'},
          ]
          
    const {parentCallback} = props;
    const [movieName, setMovieName] = useState('');
    let [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * movies.length))

    const notifyError = (label) => toast.error(label);
    const notifySuccess = (label) => toast.success(label);

    const checkMovie = () =>{
        if(movieName.trim() === ''){
            notifyError('👎 Ingrese el nombre de la película')
            return;
        }
        if(movies[randomIndex].name === movieName.trim().toLowerCase()){
            setRandomIndex(Math.floor(Math.random() * movies.length));
            setMovieName('');
            notifySuccess('👍 Nombre Correcto');
            parentCallback(true);
        }else{
            notifyError('👎 Nombre Incorrecto');
            parentCallback(false);
        }
    }
    
    return(
        
        <div className="EnterTheMovie">
            <div className="card">
                <div className="container">
                    <h1><b>Adivina la película</b></h1>
                    <div className="Emojis">{movies[randomIndex].emojis}</div>
                        <input className="input" type="text" value={movieName} onInput = {e => setMovieName(e.target.value)} placeholder="Nombre de la película..."  />
                        <div>
                            <button className="btnSendMovie" placeholder="Enviar" onClick={() => checkMovie()}>Enviar</button>
                        </div>
                </div>

            </div>        
            <ToastContainer position="bottom-right"/>     
        </div> 
    );

}

export default EnterTheMovie;