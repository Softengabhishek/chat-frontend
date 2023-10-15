import './Header.css'
import profile from "../../../assets/profile-abhi.jpg"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header = () => {
    return (
        <div className="chat-header">
            <div className="header-coloum-1">
                <img src={profile} alt="Profile Image" />
            </div>
            <div className="header-coloum-2">
                <h5>Abhishek Gupta</h5>
                <p>Great day ahead</p>
            </div>
            <div className="header-coloum-3">
                <MoreVertIcon/>
            </div>
        </div>
            )
}

            export default Header