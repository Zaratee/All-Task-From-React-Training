import '../../App.css';
import {React, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  function EnterTheMovie(props) {
      const movies = [
          {id:1, emojis:'๐ผ๐๐ฏ๐ฆ๐ต๐ฆฉ', name:'kung fu panda'},
          {id:2, emojis:'๐งโโ๏ธ๐ ๐ฆ', name:'la sirenita'},
          {id:3, emojis:'๐ฎ๐ฉ๐ผ๐ฉ๐ผ๐คบ๐คบ๐ฉโ๐ง๐จโ๐ง', name:'juego de gemelas'},
          {id:4, emojis:'๐ง๐ณ๐ซ๐ผ๐๐๐ผ๐๐ผโโ๏ธ๐ฅถ๐ฅถ๐๐', name:'titanic'},
          {id:5, emojis:'๐ญโก๐ง๐ผโ๐ณ๐ฅ', name:'ratatouille'},
          {id:6, emojis:'โค๐ถ๐๐ถโค', name:'la dama y el vagabundo'},
          {id:7, emojis:'๐จ๐ด๐๐', name:'volver al futuro'},
          {id:8, emojis:'๐๐ต๐ฆ', name:'planeta de los simios'},
          {id:9, emojis:'๐งโโ๏ธ๐ท', name:'el hombre araรฑa'},
          {id:10, emojis:'๐คต๐ฆ', name:'batman'},
          ]
          
    const {parentCallback} = props;
    const [movieName, setMovieName] = useState('');
    let [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * movies.length))

    const notifyError = (label) => toast.error(label);
    const notifySuccess = (label) => toast.success(label);

    const checkMovie = () =>{
        if(movieName.trim() === ''){
            notifyError('๐ Ingrese el nombre de la pelรญcula')
            return;
        }
        if(movies[randomIndex].name === movieName.trim().toLowerCase()){
            setRandomIndex(Math.floor(Math.random() * movies.length));
            setMovieName('');
            notifySuccess('๐ Nombre Correcto');
            parentCallback(true);
        }else{
            notifyError('๐ Nombre Incorrecto');
            parentCallback(false);
        }
    }
    
    return(
        
        <div className="EnterTheMovie">
            <div className="card">
                <div className="container">
                    <h1><b>Adivina la pelรญcula</b></h1>
                    <div className="Emojis">{movies[randomIndex].emojis}</div>
                        <input className="input" type="text" value={movieName} onInput = {e => setMovieName(e.target.value)} placeholder="Nombre de la pelรญcula..."  />
                        <div>
                            <button className="btnSendMovie"ย placeholder="Enviar" onClick={() => checkMovie()}>Enviar</button>
                        </div>
                </div>

            </div>        
            <ToastContainer position="bottom-right"/>     
        </div> 
    );

}

export default EnterTheMovie;