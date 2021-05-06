import style from './Game.module.css';
import Choice from './Choice/Choice';

const Game = (props) => {
    let choices = props.choices.map((c, index) =>{
            return <Choice id={c.id} key={c.id} choiceClicked={()=>props.gamePlayed(c.id)} name={c.name}/>
        }
    );
    
    let sp = null;
    if(props.playMsg && props.playMsg.results){
        const kv = props.kv;
        const you = kv[props.playMsg.player]
        const comp = kv[props.playMsg.computer]
        sp = <span>You played {you} and the Computer played {comp}, You ...{props.playMsg.results}</span>
    }

    return (
        <div className={style.Game}>
            <button onClick={props.load}>Load Choices</button>
            {choices}
            {sp}
        </div>
    );
}

export default Game;
