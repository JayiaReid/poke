import React, { useContext, useState } from 'react';
import '../css/Login.css';
import background from '../assests/landing.jpg'
import { FaUser } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';
import { PokeContext } from '../Components/Context';

const LoginSignup = () => { 
  const {name} = useContext(PokeContext);
  const nav = useNavigate();

  const [pw, setPw]=useState('');
  const [email, setEmail]=useState('')
  const [user, setUser]=useState('')


  const handleClick = (e) =>{
    e.preventDefault()
    if(pw=="" || email=="" || user ==""){
      alert("enter all fields")
    }else{
      alert(`Welcome: ${name} is your pokemon of the month`)
      nav('/home');
    }
    
  }
  return (
    
    <div id='login_page' className='container'>
      <img src={background}></img>
      <form>
      <div className='inputs'>
        <div className="text">Sign Up/Login</div> 
        <div className="input">
          <FaUser className='icon'/>
          <input type="text" placeholder="Username" onChange={(e)=>setUser(e.target.value)}/>
        </div>
        <div className='input'>
          <CiMail className='icon'/>
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='input'>
          <FaLock className='icon'/>
          <input type="password" placeholder="Password" onChange={(e)=>setPw(e.target.value)}/>
        </div>
          <div className="submit-continer">
            <button className="submit" onClick={handleClick}>Sign up</button>
            <button className="submit" onClick={handleClick}>Login</button>
          </div>
        </div>
      
      </form>
    </div>
  );
}

export default LoginSignup;



