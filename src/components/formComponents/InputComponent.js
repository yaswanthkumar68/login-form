import React from 'react'
import './formStyles.css'

const InputComponent = (props) => {
    const {type, fieldName, value, handleChange, handleFocus, labelName} = props

    return(
        <div>
            <label className="login-label">{labelName}</label><br/>
            <input
                className="login-input"
                type={type}
                name={fieldName}
                value={value}
                onChange={handleChange}
                onFocus={handleFocus}
                minLength="5"
                maxLength="15"
                required
            />
        </div>
    )
}

export default InputComponent