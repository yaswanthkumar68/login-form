const initialLoginState = {}

const loginReducer = (state = initialLoginState, action) => {
    switch (action.type) {
        case 'LOGIN_DETAILS' : {
            return {...action.payload}
        }
        default : {
            return state
        }
    }
}

export default loginReducer