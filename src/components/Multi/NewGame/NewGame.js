import React from 'react';
import style from './NewGame.module.css';
import Choice from '../../Game/Choice/Choice';

const NewGame =(props)=>{
    let nameInput = React.createRef();

    let choices = props.choices.map((c, index) =>{
        return <Choice id={c.id} key={c.id} choiceClicked={()=>props.gamePlayed(c.id, nameInput.current.value)} name={c.name}/>
        }
    );

    let sp = null;
    if(props.playMsg.key){
        sp = <span>Your game key is {props.playMsg.key}. Please share with your opponent! You can also get game status above with this key.</span>;
    }

    return (
    <div className={style.NewGame}>
        <p>Start a new multi-player game</p>
        <div>
            <label htmlFor="nameText">Your Name</label>
            <input ref={nameInput} name="nameText" type="text"></input>
        </div>
        <button onClick={props.load}>Load Choices</button>
        {choices}
        {sp}
    </div>);
}

export default NewGame;