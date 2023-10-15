import './Leftside.css'
import Profilecard from '../Profilecard/Profilecard'
import { useEffect, useState } from 'react'

const Leftside = () => {
  const[users, setUsers] = useState([])
  const getUsers = async()=>{
    const data = await fetch("http://localhost:3000/api/user")
    const users = await data.json()
    setUsers(users)
  }
  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className="side-profiles">
    {/* <Profilecard name='Abhishek Gupta' active={false} />
    <Profilecard name='Pooja Soni' active={false} />
    <Profilecard name='Sachin Verma' active={true} />
    <Profilecard name='Amit Verma' active={false} />
    <Profilecard name='Abhishek Gupta' active={false} />
    <Profilecard name='Abhishek Gupta' active={false} />
    <Profilecard name='Abhishek Gupta' active={false} />
    <Profilecard name='Aditya Gupta' active={true} />
    <Profilecard name='Shashank' active={false} />
    <Profilecard name='Shashank' active={false} />
    <Profilecard name='Shashank' active={false} />
    <Profilecard name='Shashank' active={false} /> */}
    {users.map((user, index)=>{
        return <Profilecard name={user.name.firstName +" "+ user.name.lastName} active={false} key={index}/>
    })}
   
</div>
  )
}

export default Leftside