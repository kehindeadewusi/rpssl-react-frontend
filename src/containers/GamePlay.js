import React, {useState, useEffect} from 'react';
import Modal from '../components/UI/Modal/Modal';
import ApiLink from '../components/Common/ApiLink/ApiLink';
import Game from '../components/Game/Game';
import RandomControl from '../components/Game/RandomControl/RandomControl';
import axios from 'axios';

const GamePlay = props => {
    const [api, setApi] = useState("http://localhost:8081");
    const [rand, setRand] = useState({id:"0", name:""});
    const [choices, setChoices] = useState([]);
    const [playMsg, setPlayMsg] = useState({computer:0, player:0, results:""});

    const [kv, setKv] = useState({}); 

    const apiChangeHandler= (e)=> {
        console.log(api)
        setApi(e.target.value);
    }

    const modalCancelHandler = ()=> {
    }

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

    const playHandler = (id) => {
        let data = {player: id }

        axios.post(api+"/play", data)
            .then(response =>{
                setPlayMsg(response.data);
            });
    }

    const getRandomChoice = ()=>{
        axios.get(api+"/choice")
            .then(response =>{
                setRand(response.data);
            });
    }

    let somethingInModal = null;

    let burger = <p>A burger</p>;

    return (
        <React.Fragment>
            <Modal show={false} modalClosed={modalCancelHandler}>
                {somethingInModal}
            </Modal>
            <div><ApiLink api={api} apiChange={apiChangeHandler}/></div>
            <div>
                <Game choices={choices} playMsg={playMsg} kv={kv} gamePlayed={playHandler} load={loadChoicesHandler}/>
            </div>
            <div><RandomControl val={rand} randClick={getRandomChoice}/></div>
        </React.Fragment>
    );
}

export default GamePlay