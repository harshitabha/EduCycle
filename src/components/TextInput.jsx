/* eslint-disable react/prop-types */
const TextInput = (props) => {
    return (
        <div className="form-div">
            <label htmlFor={`input-field-${props.id}`} className="text-input-label form-lable form-text">{props.inputLable}</label>
            <input 
                type="text" 
                id={`input-field-${props.id}`}
<<<<<<< HEAD
                className={`text-input form-text form-input ${props.classes}`}
                placeholder={props.placeholder} />
=======
                className="text-input form-text form-input"
                placeholder={props.placeholder}
                onSubmit={(e) => {props.handleSubmit(e)}} />
>>>>>>> 14a0e631cbb7a92546608548d2abfed2bc6357a5
        </div>
    );
}

export default TextInput;