import React from 'react';
import style from './GameStatus.module.css';

const GameStatus =(props)=>{
    let sp = null;
    if(props.gameStatus){
        sp = <span>Player 1 is {props.gameStatus.Player1}, Player 2 is {props.gameStatus.Player2}, Winner is {props.gameStatus.Winner}.</span>;
    }

    // {
    //     "Open": true,
    //     "Player1": "string",
    //     "Player1Choice": 0,
    //     "Player2": "string",
    //     "Player2Choice": 0,
    //     "Winner": "string"
    //   }
    let textInput = React.createRef();

    return (<div className={style.GameStatus}>
        <ul>
            <li>
                <label htmlFor="keyInput">Game Key</label>
                <input ref={textInput} name="keyInput" type="text"/>
                <button onClick={()=>props.statusCheck(textInput.current.value)}>Check status</button>
            </li>
            <li>{sp}</li>
        </ul>
    </div>);
}

export default GameStatus;