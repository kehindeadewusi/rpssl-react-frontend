import style from './RandomControl.module.css';

const RandomControl = (props)=>(
    <div className={style.RandomControl}>
        <button name="get_random" onClick={props.ordered}>Get Random Choice</button>
        <span>{props.randomChoice}</span>
    </div>
);

export default RandomControl;
