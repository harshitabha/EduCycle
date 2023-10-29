/* eslint-disable react/prop-types */
const TextInput = (props) => {
    return (
        <div className="form-div">
            <label htmlFor={`input-field-${props.id}`} className="text-input-label form-lable form-text">{props.inputLable}</label>
            <input 
                type="text" 
                id={`input-field-${props.id}`}
                className="text-input form-text form-input"
                placeholder={props.placeholder}
                onSubmit={(e) => {props.handleSubmit(e)}} />
        </div>
    );
}

export default TextInput;