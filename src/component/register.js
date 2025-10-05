import React ,{useState} from 'react';
import axios from "axios";
export default function register() {
    const[form, setform]=useState({username:"",email:"",password:""});
    const [msg,setMsg]=useState("");

    const handleChange=(e)=>setform({...form,[e.target.name]:e.target.value});
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
           const res=await axios.post("http://localhost:5000/register",form);
           setMsg(res.data.message);
        }catch(error){
           setMsg(error.response?.data?.error || "Registration failed");
        }
    }
  
  return (
    <div>
      <h1>Registration page</h1>
      <form action="" onSubmit={handleSubmit}>
       <input type="text"name="username" placeholder="UserName" onChange={handleChange} />
       <input type="email"name="email" placeholder="Email" onChange={handleChange} />
       <input type="text"ngit remote add originame="password" placeholder="Password" onChange={handleChange} />
       <button type="submit">Register</button>

      </form>
      <p>{msg}</p>
    </div>
  )
}
