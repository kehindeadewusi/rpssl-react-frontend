import React, {useState} from 'react';
import GameStatus from '../components/Multi/GameStatus/GameStatus';
import NewGame from '../components/Multi/NewGame/NewGame';
import CompleteGame from '../components/Multi/CompleteGame/CompleteGame';
import ApiLink from '../components/Common/ApiLink/ApiLink';
import axios from 'axios';

const MultiPlay = props=> {
    const [api, setApi] = useState("http://localhost:8081");
    const [gameStatus, setGameStatus] = useState({});
    const [choices, setChoices] = useState([]);
    const [kv, setKv] = useState({}); 
    const [playMsg, setPlayMsg] = useState({computer:0, player:0, results:""});
    const [completePlayMsg, setCompletePlayMsg] = useState({});

    const loadChoicesHandler = () => {
        axios.get(api+"/choices")
            .then(response =>{
                setChoices(response.data);
                let arr = response.data
                let m = arr.reduce(function(map, obj) {
                    map[obj.id] = obj.name;
                    return map;
                }, {});
                setKv(m);
            });
    }
    // {
    //     "Open": true,
    //     "Player1": "string",
    //     "Player1Choice": 0,
    //     "Player2": "string",
    //     "Player2Choice": 0,
    //     "Winner": "string"
    //   }

    const apiChangeHandler = (e) => {
        setApi(e.target.value);
    }

    const statusCheckHandler = (key) => {
        axios.get(api + "/game-status/" + key)
            .then(response =>{
                setGameStatus(response.data);
            });
    }

    const playHandler = (id, name) => {
        let data = {player: name, selection: id }
        // {
        //     "player": "string",
        //     "selection": 0
        //   }

        axios.post(api+"/start-multiplayer", data)
            .then(response =>{
                setPlayMsg(response.data);
            });
    }

    const completePlayHandler = (id, key, name) => {
        let data = {key: key, player: name, selection: id }

        axios.post(api+"/complete-multiplayer", data)
            .then(response =>{
                setCompletePlayMsg(response.data);
            });
    }

    return (<div>
        <div><ApiLink api={api} apiChange={apiChangeHandler}/></div>
        <div><GameStatus gameStatus={gameStatus} statusCheck={statusCheckHandler}/></div>
        <div><NewGame choices={choices} kv={kv} load={loadChoicesHandler} playMsg={playMsg} gamePlayed={playHandler} /></div>
        <div><CompleteGame choices={choices} kv={kv} load={loadChoicesHandler} completePlayMsg={completePlayMsg} completeGamePlayed={completePlayHandler}/></div>
    </div>);
}

export default MultiPlay;