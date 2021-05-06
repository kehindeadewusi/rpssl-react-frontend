import style from './NewGame.module.css';

const NewGame =(props)=>(
    <div className={style.NewGame}>
        <ul>
            <li>
                <label htmlFor="options">Play a new multi-player game.</label>
                <ul name="options">
                    <li><button>Rock</button></li>
                    <li><button>Paper</button></li>
                    <li><button>Scissors</button></li>
                    <li><button>Spock</button></li>
                    <li><button>Lizard</button></li>
                </ul>
            </li>
            <li><span>Your game key is 37483jdusids943. Please share with your opponent!</span></li>
        </ul>
    </div>
);

export default NewGame;