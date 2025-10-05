import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function navigator() {
    const navigate=useNavigate();
    const handleLogOut=()=>{
        localStorage.removeItem("token");
        navigate("/");
    }
  return (
    <div>
      <nav style={{padding: 10,background:"#eee"}}>
        <Link to="/"> Login</Link>
        <Link to="/registor">Registor</Link>  
        <Link to="/dashboard"> Dashboard</Link>
       
      </nav>
    </div>
  )
}
