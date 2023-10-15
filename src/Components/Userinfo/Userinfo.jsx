import './Userinfo.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import profile from '../../assets/profile.png'

import { Link } from 'react-router-dom'

const Userinfo = () => {
  return (
    <div className="side-userinfo">
      <div className="user-info-container cont-1">
        <img src={profile} alt="Abhishek Gupta" />
          <div className="name">Abhishek Gupta</div>
          <div className="username"><strong>Username</strong> : @softenabhishek</div>
          <div className="profession"><strong>Profession </strong> : Software Engineer</div>
          <div className="profession"><strong>Education </strong>: B-Tech CSE </div>
          <div className="profession"><strong>Status </strong>: Active </div>
      </div>
      <div className="user-info-container cont-2">
        <ul>
          <li><LinkedInIcon className='icon' /><Link to='https://www.Linkedin.com/in/softengabhishek/'>Linkedin</Link></li>
          <li><GitHubIcon className='icon' /><Link to='https://www.github.com/softengabhishek/'>Github</Link></li>
          <li><WhatsAppIcon className='icon' /><Link to='https://wa.me/+919598986151'> Whatsapp</Link></li>
          <li><InstagramIcon className='icon' /><Link to='https://www.instagram.com/softengabhishek/'> Instagram</Link></li>
          <li><FacebookIcon className='icon' /><Link to='https://www.facebook.com/SoftEngAbhishek/'> Facebook</Link></li>
          <li><TwitterIcon className='icon' /><Link to='https://www.twitter.com/softengabhishek/'>Twitter</Link></li>
          <li><EmailIcon className='icon' /><Link to='mailto:yourabhishekgupta@gmail.com'> Email</Link></li>
          <li><OpenInNewIcon className='icon' /><Link to='https://softengabhishek.tk/'>Portfolio</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Userinfo