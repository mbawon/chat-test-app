import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { ChatHeader } from '../components/ChatHeader'
import { ChatMessage } from '../components/ChatMessage'
import { SendMessage } from '../components/SendMessage'
import { getMessages, selectPaginated } from '../slice/message'

export const ChatRoom = () => {
    const dispatch = useDispatch()
    const dummy = useRef();
    const paginatedMessages = useSelector(selectPaginated)

    const [pageSize, setPageSize] = useState(25)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getMessages(pageSize))
    }, [pageSize, dispatch]) // get all messages

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [])// scroll me to the bottom on page load

    const handleScroll = (e) => {
        if (e.currentTarget.scrollTop === 0) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setPageSize(pageSize + (25))
            }, 5000);
        }
    }//scrol top to load more messages

    return (
        <div className='chat-page'>
            <ChatHeader />
            <section onScroll={handleScroll}>
                {loading &&
                    <div className='spinner'>
                        <Spin />
                    </div>
                }
                {paginatedMessages && paginatedMessages.map(msg => <ChatMessage key={msg.messageId} senderId={msg.senderId} message={msg.message} />)}
                <span ref={dummy}></span>
            </section>
            <SendMessage />
        </div>
    )
}
