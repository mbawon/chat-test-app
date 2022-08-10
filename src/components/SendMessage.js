import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../slice/message'
import { selectUser } from '../slice/auth-slice'

export const SendMessage = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    const user = useSelector(selectUser) //get all users from store

    const sendMessage = () => {
        const userMessage = {} //initial an empty object

        userMessage.messageId = new Date().getTime() //unique message id
        userMessage.senderId = user.userId //sender's user id from user list
        userMessage.senderName = user.username //sender's username from user list
        userMessage.message = message //message of the user

        dispatch(addMessage(userMessage)) //dispatch message to store.
        setMessage("") //clear input
    }

    return (
        <div className='send-message'>
            <Input
                size='large'
                placeholder='Type here...'
                prefix="Message:"
                style={{
                    height: "60px"
                }}
                onChange={(e) => setMessage(e.target.value)}
                onPressEnter={sendMessage}
                value={message}
            />
            <Button onClick={sendMessage} type="primary" size='large' icon={<SendOutlined />} style={{ height: 60, width: 70 }}></Button>

        </div>
    )
}
