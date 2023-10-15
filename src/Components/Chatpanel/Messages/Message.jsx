import profile from '../../../assets/profile-abhi.jpg'
import './Message.css'

const Message = (props) => {
  return (
    <div className={props.side=="left" ? "message":"message right-msg"}>
        <img src={profile} alt="" />
        <div className="text-msg">{props.message}</div>
    </div>
  )
}

export default Message