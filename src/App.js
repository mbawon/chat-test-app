import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatPage } from './containers/ChatPage';
import { Login } from './containers/Login';
import { selectUser } from './slice/auth';

export const App = () => {

  const [loggedIn, setLoggedIn] = useState(false)

  const user = useSelector(selectUser)

  useEffect(() => {
    setLoggedIn(Object.keys(user).length > 0)
  }, [user])
  
  return (
    <div>
      {loggedIn ? <ChatPage /> : <Login />}
    </div>
  );
}
