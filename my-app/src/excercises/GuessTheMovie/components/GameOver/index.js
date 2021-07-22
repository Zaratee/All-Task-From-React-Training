import '../../App.css';

function GameOver(props){
    document.body.style = "background: #F0F0F0";
    const {parentCallback} = props;

    return(
        <div className="GameOver">
            <div className="card">
                <h1>GameOver</h1>
                <h1>😂🤣🤣😂</h1>
                <button className="btnContinuePlaying" onClick={parentCallback}>Comenzar de nuevo</button>
            </div>
        </div>
    )
}
export default GameOver;