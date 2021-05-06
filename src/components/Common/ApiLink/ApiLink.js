import style from './ApiLink.module.css'

const ApiLink = (props)=>(
    <div className={style.ApiLink}>
        <label htmlFor="urlText">Enter API Url Here</label>
        <input type="text" value={props.api} onChange={props.apiChange} name="urlText"/>
    </div>
);

export default ApiLink;
