import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import ButtonComponent from './formComponents/ButtonComponent'
import InputComponent from './formComponents/InputComponent'
import { loginDetailsAction } from '../actions/loginAction'

const LoginComponent = (props) => {
    const [data, setData] = useState({userName : '', password : ''})
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === 'userName'){
            setData({...data, userName : value})
        }
        else if(name === 'password'){
            setData({...data, password : value})
        }
    }

    const handleFocus = () => {
        setFormErrors({})
    }
    
    const handleErrors = () => {
        if(data.userName.trim().length === 0){
            errors.username = "username cannot be blank"
        }
        else if(data.userName.trim().length < 5 || data.userName.trim().length > 15){
            errors.username = "username should between 5 - 15 characters"
        }

        if(data.password.trim().length === 0){
            errors.password = "password cannot be blank"
        }
        else if(data.password.trim().length < 5 || data.password.trim().length > 8){
            errors.password = "password should between 5 - 8 characters"
        }
    }

    const handleClick = () => {
        handleFocus()
        alert('you are signin successfully with your microsoft account details')
        setData({...data, userName : '', password : ''})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleErrors()

        if(!Object.keys(errors).length){
            dispatch(loginDetailsAction(data))
            alert('you are signin successfully')
            setData({...data, userName : '', password : ''})
        }
        else{
            setFormErrors(errors)
        }
    }


    return(
        <div style={{padding:"10px 40px"}}>
            <form onSubmit={handleSubmit}>
                <h2 style={{textAlign:"center"}}>Login Here</h2>

                <InputComponent
                    type = "text"
                    fieldName = "userName"
                    value = {data.userName}
                    handleChange = {handleChange}
                    handleFocus={handleFocus}
                    labelName = "Enter Username"
                /><span style={{color:"red", margin:"8px 0px"}}>{formErrors.username}</span>

                <InputComponent
                    type = "password"
                    fieldName = "password"
                    value = {data.password}
                    handleChange = {handleChange}
                    handleFocus={handleFocus}
                    labelName = "Enter password"
                /><span style={{color:"red", margin:"8px 0px"}}>{formErrors.password}</span>

                <ButtonComponent
                    loginType="signin"
                />

            </form><hr/>

            <ButtonComponent
                loginType="Signin with microsoft account"
                handleClick={handleClick}
            />
        </div>
    )
}

export default LoginComponent