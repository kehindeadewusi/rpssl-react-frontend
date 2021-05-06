import style from './Choice.module.css';

const Choice = (props) =>(
        <div className={style.Choice}>
            <button onclick={props.choiceClicked}>{props.name}</button>
        </div>
    )

export default Choice;
