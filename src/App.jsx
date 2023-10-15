import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Chat from './Pages/Chat/Chat'
import { useEffect, useState } from 'react'


function App() {
  
  const [currentUser, setCurrentUser] = useState()

  useEffect(()=>{
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    setCurrentUser(isLoggedIn)
  },[])


  return (
    <>
      <BrowserRouter>
        {/* <h1>Navbar</h1> */}
        <Routes>
          <Route exact path='/chat' element={<Chat setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>  
          <Route  exact path='/'  element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} />}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
