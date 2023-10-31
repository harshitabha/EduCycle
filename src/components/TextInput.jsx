/* eslint-disable react/prop-types */
const TextInput = (props) => {
    return (
        <div className="form-div">
            <label htmlFor={`input-field-${props.id}`} className="text-input-label form-lable form-text">{props.inputLable}</label>
            <input 
                type="text" 
                id={`input-field-${props.id}`}
                className={`text-input form-text form-input ${props.classes}`}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={(e) => {props.handleChange(e)}} />
        </div>
    );
}

export default TextInput;