import './Profilecard.css'
import profile from '../../assets/Profile.png'

const Profilecard = (props) => {
  return (
    <div className= {props.active ? "chat-active profile-card" : "profile-card" }>
      <div className="card-coloum-1">
        <img src={profile} alt="Profile Image" />
      </div>
      <div className="card-coloum-2">
        <h5>{props.name}</h5>
        <p>What should we today gys ?</p>
      </div>
      <div className="card-coloum-3">
        <h6 className="last-chat-date">09:30</h6>
        <h2>...</h2>
      </div>
    </div>
    
  )
}

export default Profilecard