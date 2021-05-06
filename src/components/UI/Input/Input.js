import style from './Input.module.css';

const Input = (props)=>{
    let inputElement = null;
    let inputClasses = [style.InputElement];
    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(style.Invalid);
    }

    switch(props.elementType){
        case 'text':
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>;
            break;
        case 'textarea':
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                onChange={props.changed}
                value={props.value}/>;
            break;
        case 'select': 
            inputElement = <select 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                >
                {props.elementConfig.options.map(option=>{
                    return <option key={option.value} value={option.value}>{option.displayValue}</option>
                })}
            </select>
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                onChange={props.changed}
                value={props.value}/>  ;
    }

    return (
        <div className={style.Input}>
            <label className={style.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;