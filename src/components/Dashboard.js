import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = (props) => {
    const loginDetails = useSelector((state) => {
        return state.loginDetails
    })
    // console.log(loginDetails)

    return(
        <>
          {/* <h5>{loginDetails.userName}</h5>   */}
        </>
    )
}

export default Dashboard