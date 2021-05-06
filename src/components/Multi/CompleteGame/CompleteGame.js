import style from './CompleteGame.module.css';

const CompleteGame = (props) => (
    <div className={style.CompleteGame}>
        <ul>
            <li>
                <label htmlFor="keyInput">Game Key</label>
                <input name="keyInput" type="text"/>
            </li>
            <li>
                <ul>
                    <li><button>Rock</button></li>
                    <li><button>Paper</button></li>
                    <li><button>Scissors</button></li>
                    <li><button>Spock</button></li>
                    <li><button>Lizard</button></li>
                </ul>
            </li>
            <li><span>You chose Rock, Keni chose Paper, you loose.</span></li>
        </ul>
    </div>
)

export default CompleteGame;
