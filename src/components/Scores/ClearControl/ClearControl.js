import style from './ClearControl.module.css'

const ClearControl = (props)=>(
    <div>
        <button 
            className={style.ClearControl} 
            onClick={props.clear}
            >
                "Clear Scoreboard"
        </button>
    </div>
);

export default ClearControl;