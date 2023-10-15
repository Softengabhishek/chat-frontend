import './Footer.css'
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import NearMeIcon from '@mui/icons-material/NearMe';
import { useState ,createContext} from 'react';

const Chat =createContext()

const Footer = ({setData}) => {
  
    const[chat, setChat]=useState("")
    const handleMessage = ()=>{
      setChat("")
      setData(chat)
    }

  return (
    <div className="footer">
        <input type="text" placeholder="Send a message" className="chat-input" onChange={(e)=> setChat(e.target.value)} value={chat} onKeyDown={(e)=>{
          if(e.key=='Enter') handleMessage()
        }}/>
        <div className="button-container">
          <div className="media-btn">
            <TextFormatIcon className='icons'/>
            <AttachFileIcon className='icons'/>
            <AddReactionIcon className='icons'/>
            <MoreVertIcon className='icons'/>
            <DeleteIcon className='icons'/>
          </div>
          <button onClick={handleMessage}><NearMeIcon/>Send</button>
        </div>
    </div>
  )
}

export default Footer
export {Chat}