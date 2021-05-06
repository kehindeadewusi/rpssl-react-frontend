import style from './GameStatus.module.css';

const GameStatus =(props)=>(
    <div className={style.GameStatus}>
        <ul>
            <li>
                <label htmlFor="keyInput">Game Key</label>
                <input name="keyInput" type="text"/>
                <button>Check status</button>
            </li>
            <li><span>You chose Rock, Keni chose Paper, you loose.</span></li>
        </ul>
    </div>
);

export default GameStatus;