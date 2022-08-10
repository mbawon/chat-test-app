import { Button, Input } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../slice/auth-slice'
import { addUser, selectUsers } from '../slice/user-slice'

export const Login = () => {
    const dispatch = useDispatch()
    const [senderName, setSenderName] = useState("")

    const users = useSelector(selectUsers)

    const handleLogin = (e) => {

        e.preventDefault();

        const user = users.filter(user=>user.username.toLowerCase() === senderName.toLowerCase())
        if(user.length > 0){
            dispatch(login(user[0]))
        }else{
            const newUser = {}
            newUser.userId = new Date().getTime()
            newUser.username = senderName
            dispatch(addUser(newUser))
            dispatch(login(newUser))
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <Input size="large" onChange={(e) => setSenderName(e.target.value)} />
                <Button onClick={handleLogin} type="primary" className="w-100">LOGIN</Button>
            </form>
        </div>
    )
}