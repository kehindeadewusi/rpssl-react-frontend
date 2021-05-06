import React from 'react';
import GameStatus from '../components/Multi/GameStatus/GameStatus';
import NewGame from '../components/Multi/NewGame/NewGame';
import CompleteGame from '../components/Multi/CompleteGame/CompleteGame';

const MultiPlay = props=> (
    <div>
        <p>Multi-player interface.</p>
        <div><GameStatus/></div>
        <div><NewGame/></div>
        <div><CompleteGame/></div>
    </div>
)

export default MultiPlay;