import style from './ApiLink.module.css'

const ApiLink = (props)=>(
    <div className={style.ApiLink}>
        <label for="urlText">Enter API Url Here</label>
        <input type="text" name="urlText"/>
    </div>
);

export default ApiLink;