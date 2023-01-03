import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext,AuthContextProvider } from '../Context/AuthContext'
import '../App.css'

export default function Nav() {
    const {auth}=useContext(AuthContext)
    const handleLogout=()=>{
       window.location.reload()
    }
  return (
    <div className="navbar">
      <span><Link to="/home">Home</Link></span>
      <span><Link to="/dashboard">Dashboard</Link></span>
      {!auth.token?(<span><Link to="/login">Login</Link></span>):(<></>)}
      {auth.token?(<button onClick={handleLogout}>Logout</button>):(<></>)}
    </div>
  )
}