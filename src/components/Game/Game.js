import style from './Game.module.css';
import Choice from './Choice/Choice';

const Game = (props) => {
    const choiceClickedHandler = ()=>{

    }

    let choices = props.choices.map((c, index) =>{
            return <Choice id={c.id} key={c.id} choiceClicked={choiceClickedHandler} name={c.name}/>
        }
    )

    return (
        <div className={style.Game}>
            {choices}
        </div>
    );
}

export default Game;
