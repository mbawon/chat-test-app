import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChatRoom } from './container/ChatRoom';
import { Login } from './container/Login';
import { selectUser } from './slice/auth-slice';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const user = useSelector(selectUser)

  useEffect(() => {
    setLoggedIn(Object.keys(user).length > 0)
  }, [user])

  return (
    <div>
      {loggedIn ? <ChatRoom /> : <Login />}
    </div>
  );
}

export default App