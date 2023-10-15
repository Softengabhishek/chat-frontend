import {  useState } from 'react'
import './Login.css'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({setCurrentUser, currentUser}) => {
  const [user, setUser] = useState({username : "", password : ""})
  const navigate = useNavigate()

  const postData = async()=>{
    const data = await fetch("http://localhost:3000/api/login",{
      method : "POST",
      body : JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      const res = await data.json()
      console.log(res)
      if(res.Status==="SUCCESS"){
       toast.success('Succesfully logged in', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
       
        localStorage.setItem("isLoggedIn" , true)
        setCurrentUser("true")
        navigate('/chat')
      }
      else if(res.Status==="Fail"){
        toast.warn('Invalid Credentials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setCurrentUser("false")
      }
      else{
        toast.warn('Invalid Credentials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setCurrentUser("false")
      }
  }


  const handleLogin = (e)=>{
      e.preventDefault()
      postData()
      setUser({username :"", password: ""})
  }

  const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser({...user , [name] : value})
  }

  return (
    <>{ currentUser==="true" ?
      navigate('/chat') :
    <><form method='POST' onSubmit={handleLogin}>
        <h5>Allready have an account ?</h5>
        <div className="name box">
            <box-icon type='solid' name='user-circle'></box-icon>
            <input type="text" name="username" required onChange={handleInput} value={user.username}/>
        </div>
        <div className="password box">
            <box-icon type='solid' name='shield'></box-icon>
            <input type="password" name="password" required onChange={handleInput} value={user.password}/>
        </div>
        <div className="remember-check">
            <input type="checkbox" name="" id=""/><p>Remember me</p>
        </div>
        <button type="submit" >Login</button>
        <p className="signup">Create an account : <Link to="/"> Sign up</Link></p>

    </form>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    <ToastContainer /></>
    
    }</>
  )
}

export default Login    