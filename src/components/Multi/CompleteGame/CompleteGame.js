import React from 'react';
import style from './CompleteGame.module.css';
import Choice from '../../Game/Choice/Choice';

const CompleteGame = (props) => {
    let keyInput = React.createRef();
    let nameInput = React.createRef();

    let choices = props.choices.map((c, index) =>{
        return <Choice id={c.id} key={c.id} choiceClicked={()=>props.completeGamePlayed(c.id, keyInput.current.value, nameInput.current.value)} name={c.name}/>
        }
    );

    // {
    //     "Open": true,
    //     "Player1": "string",
    //     "Player1Choice": 0,
    //     "Player2": "string",
    //     "Player2Choice": 0,
    //     "Winner": "string"
    //   }
    let sp = null;
    if(props.completePlayMsg && props.completePlayMsg.Winner){
        sp = <span>Game status open? {props.completePlayMsg.Open}. Player 1 is {props.completePlayMsg.Player1}, Player 2 is {props.completePlayMsg.Player2}, Winner is {props.completePlayMsg.Winner}.</span>;
    }

    return (<div className={style.CompleteGame}>
        <p>You are here to accept a challenge. Input the game key and your name to proceed.</p>
        <ul>
            <li>
                <label htmlFor="keyInput">Game Key</label>
                <input  ref={keyInput} name="keyInput" type="text"/>
            </li>
            <li>
                <label htmlFor="nameInput">Your Name</label>
                <input ref={nameInput} name="nameInput" type="text"/>
            </li>
            <li>
                <div>
                    <button onClick={props.load}>Load Choices</button>
                    {choices}
                    {sp}
                </div>
            </li>
            <li>{sp}</li>
        </ul>
    </div>);
}

export default CompleteGame;
