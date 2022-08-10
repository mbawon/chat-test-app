import React, { Fragment } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux'
import { selectUser } from '../slice/auth-slice';

export const ChatMessage = ({ senderId, message }) => {

    const user = useSelector(selectUser) //get all users from store

    const messageClass = user.userId === senderId ? 'sent' : 'received'; //check user id against incoming message to apply appropriate styles for message alignment

    return (
        <Fragment>
            <div className={`message ${messageClass}`}>
                <Avatar size="large" icon={<UserOutlined />} />
                <p>{message}</p>
            </div>
        </Fragment>)
}