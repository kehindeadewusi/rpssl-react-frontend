import React, {useState, useEffect} from 'react';
import Modal from '../components/UI/Modal/Modal';
import ApiLink from '../components/Common/ApiLink/ApiLink';
import Game from '../components/Game/Game';
import RandomControl from '../components/Game/RandomControl/RandomControl';

const GamePlay = props => {
    const [doing, setDoing] = useState(false);
    const choices = [
        {id: 1, name:"Rock"},
        {id: 2, name:"Paper"},
        {id: 3, name:"Scissors"},
        {id: 4, name:"Spock"},
        {id: 5, name:"Lizard"}
    ]

    const choiceHandler= ()=> {
        
    }

    const modalCancelHandler= ()=> {
        setDoing(false);
    }

    let apiLink = <ApiLink/>;
    let somethingInModal = null;

    let burger = <p>A burger</p>;

    return (
        <React.Fragment>
            <Modal show={false} modalClosed={modalCancelHandler}>
                {somethingInModal}
            </Modal>
            <div>{apiLink}</div>
            <div>
                <Game choices={choices}/>
            </div>
            <div><RandomControl/></div>
        </React.Fragment>
    );
}

export default GamePlay