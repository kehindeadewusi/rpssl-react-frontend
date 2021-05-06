import style from './Choice.module.css';

const Choice = (props) =>(
        <div className={style.Choice}>
            <button onClick={props.choiceClicked}>{props.name}</button>
        </div>
    )

export default Choice;
