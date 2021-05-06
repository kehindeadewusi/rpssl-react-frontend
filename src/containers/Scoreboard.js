import React, {Component} from 'react';
import Display from '../components/Scores/Display/Display';
import ClearControl from '../components/Scores/ClearControl/ClearControl';
import axios from 'axios';

const Scoreboard = props => {
    const clearHandler= ()=> {
        axios.post('http://127.0.0.1:8081/clear-scoreboard')
            .then(response =>{
                console.log("cleared");
            });
    }

    return (
        <>
            <div>Scoreboard</div>
            {<Display/>}
            <div>
                <ClearControl cleared={clearHandler}/>
            </div>
        </>
    );
}

export default Scoreboard;