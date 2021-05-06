import style from './DisplayItem.module.css'

const DisplayItem = (props)=>(
    <tr className={style.DisplayItem} key={props.id}>
        <td>{props.player1}</td>
        <td>{props.player2}</td>
        <td>{props.player_1_choice}</td>
        <td>{props.player_2_choice}</td>
        <td>{props.winner}</td>
    </tr>
);

export default DisplayItem;