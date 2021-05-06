import React from 'react';
import ScoreItem from './DisplayItem/DisplayItem';
import style from './Display.module.css';

const Display = props => {
    let scores = null;
    if(props.scores){
        scores = props.scores.map((score, index)=>{
            return <ScoreItem id={index} player1={score.player1} player2={score.player2} player_1_choice={score.player_1_choice} player_2_choice={score.player_2_choice} winner={score.winner} />
        });
    }
        
    return (
        <table className={style.Display}>
            <tr><td colSpan="5">Scoreboard</td></tr>
            <tr>
                <td>Player 1</td>
                <td>Player 2</td>
                <td>Player 1 Selection</td>
                <td>Player 2 Selection</td>
                <td>Winner</td>
            </tr>
            {scores}
        </table>
    );
}

export default Display;