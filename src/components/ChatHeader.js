import React from 'react'
import { Button } from 'antd'

export const ChatHeader = () => {
    const leaveRoom = () => {
        sessionStorage.clear()
        window.location.reload()
    }
    return (
        <div className='chat-header'>
            <span className='header-title'>CHAT ROOM</span>
            <Button onClick={leaveRoom} type="danger">Leave Room</Button>
        </div>
    )
}
