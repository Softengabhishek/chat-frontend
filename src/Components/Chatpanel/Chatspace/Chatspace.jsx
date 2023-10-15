import './Chatspace.css'
import Message from '../Messages/Message'



const Chatspace = ({Chats}) => {
  return (
    <div className="chat-space">
      {Chats.map((chat,i)=>{
        return <Message message={chat} side="left" key={i}/>

      })}
      
    </div>
  )
}

export default Chatspace