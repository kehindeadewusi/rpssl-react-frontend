import style from './RandomControl.module.css';

const RandomControl = (props)=>{
    let show = false
    if(props.val.id > 0){
        show = true;
    }
    let sp = null;
    if(show){
        sp = <span>{props.val.id} - {props.val.name}</span>;
    }
    
    return (<div className={style.RandomControl}>
                <button name="get_random" onClick={props.randClick}>Get Random Choice</button>
                {sp}
            </div>
            )
}

export default RandomControl;
