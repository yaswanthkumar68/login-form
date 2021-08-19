import React from 'react'
import './formStyles.css'

const ButtonComponent = (props) => {
    const {loginType, handleClick} = props

    return(
        <div style={{textAlign:"center"}}>
            <button className="login-button" onClick={handleClick}>{loginType}</button>
        </div>
    )

}

export default ButtonComponent