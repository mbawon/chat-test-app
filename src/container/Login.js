import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../slice/auth-slice'
import { addUser, selectUsers } from '../slice/user-slice'

export const Login = () => {
    const dispatch = useDispatch()
    const [senderName, setSenderName] = useState("")
    // const [prompt, setPrompt] = useState("")

    const users = useSelector(selectUsers)

    const handleLogin = (e) => {

        e.preventDefault();

        const user = users.filter(user=>user.username.toLowerCase() === senderName.toLowerCase()) //get user details
        //check if user exist with the name provided
        if(user.length > 0){
            // const isUserActive = users.filter(user=>user.username.toLowerCase() === senderName.toLowerCase()) //check if active user exist with this name
            // if(isUserActive.length === 0){
                dispatch(login(user[0])) // add user to the list loggedin users
            // }else{
            //     setTimeout(() => {
            //         setPrompt("")
            //     }, 5000);
            //     setPrompt("There is an active user in the chat room with this name.")
            // }
        }else{ //else
            const newUser = {} //initials an empty object and add user attributes
            newUser.userId = new Date().getTime()
            newUser.username = senderName
            dispatch(addUser(newUser)) //create user
            dispatch(login(newUser)) // add user to the list of loggedin users
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                {/* {prompt && <span>{prompt}</span>} */}
                <Input size="large" placeholder='Username' onChange={(e) => setSenderName(e.target.value)} />
                
                <Button onClick={handleLogin} type="primary" style={{width:"100%", marginTop:15}}>
                    LOGIN
                </Button>
            </form>
        </div>
    )
}