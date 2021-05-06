import React, {Component} from 'react';
import axios from 'axios';
import ScoreItem from './DisplayItem/DisplayItem';

class Display extends Component{
    state = {
        scores: []
    };

    componentDidMount(){
        axios.get('http://127.0.0.1:8081/scoreboard')
            .then(response =>{
                this.setState({scores:response.data});
            });
    }

    render(){
        let scores = null
        if(this.state.scores){
            scores = this.state.scores.map((score, index)=>{
                return <ScoreItem id={index} player1={score.player1} player2={score.player2} player_1_choice={score.player_1_choice} player_2_choice={score.player_2_choice} winner={score.winner} />
            });
        }
        return (
            <table>
                {scores}
            </table>
        );
    }
}

export default Display;