import style from './ReloadControl.module.css'

const ReloadControl = (props)=>(
    <div>
        <button 
            className={style.ReloadControl} 
            onClick={props.reload}
            >
                "Reload Scoreboard"
        </button>
    </div>
);

export default ReloadControl;