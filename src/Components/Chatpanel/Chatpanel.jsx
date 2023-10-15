import './Chatpanel.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Chatspace from './Chatspace/Chatspace'
import { useEffect, useState } from 'react'

const Chatpanel = () => {
  const [Chats , setChats] = useState([])
  const [data , setData] = useState("Welcome ! It's Abhishek here.")

  console.log(data)
  useEffect(()=>{
    setChats([...Chats, data])
    console.log(Chats)
  },[data])

  return (
    <div className="chatpanel">
      <Header/>
      <Chatspace Chats={Chats}/>
      <Footer setData={setData}/>
    </div>
  )
}

export default Chatpanel