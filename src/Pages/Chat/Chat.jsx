import './chat.css'
import { Link, useNavigate } from "react-router-dom";
import Sideprofiles from '../../Components/SideProfiles/Sideprofiles';
import Chatpanel from '../../Components/Chatpanel/Chatpanel';
import Userinfo from '../../Components/Userinfo/Userinfo'
import LogoutIcon from '@mui/icons-material/Logout';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useEffect } from 'react';

const Chat = ({ setCurrentUser, currentUser }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false)
    setCurrentUser("false")
    navigate('/')
  }
  return (
    <>    {
      currentUser==="true"  ?
        <div className="chat-container">

          <div className="header">
            <div className="left">
              <h1 className="logo">
                <ChatBubbleIcon className='icon' />
                Chat Solution</h1>
              <div className="chat-navbar">
                <Link to="/">Inbox</Link>
                <Link to="/">Page</Link>
                <Link to="/">Contacts</Link>
              </div>
            </div>
            <div className="right">
              <LogoutIcon className='icon' onClick={handleLogout} />
            </div>
          </div>

          <div className="main-conatiner">
            <Sideprofiles />
            <Chatpanel />
            <Userinfo />
          </div>
        </div>
        : navigate('/')
    }
    </>

  )
}

export default Chat