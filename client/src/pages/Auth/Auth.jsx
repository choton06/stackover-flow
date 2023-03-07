import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Auth.css'
import Icon from "../../assests/sof-icon.png"
import AboutAuth from "./AboutAuth";
import { login, signup } from "../../actions/auth";

const Auth = () => {
  const [isSingup,setIsSingup]=useState(false)
  const [name,setName] =useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword] =useState('')
  
  const dispatch= useDispatch()
  const navigate= useNavigate()

  const  HandelSwitch = ()=>{
      setIsSingup(!isSingup)
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    if(!email && !password){
      alert ('Enter email and password')
    }
    if(isSingup){
      if(!name){
        alert("enter a name to continue")
      }
      
      
      dispatch(signup({name,email,password},navigate))
    }else{
      dispatch(login({email,password},navigate))
    }
   
  }
  return (
    <section className="auth-container">
      { isSingup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSingup && <img src={Icon} alt="login-logo" className="login-logo"/>}
        
        <form onSubmit={handelSubmit}>
          { isSingup &&
          <label htmlFor="name"><h4>Display Name</h4>
          <input type="text" id="name" name="name" onChange={(e)=> {setName(e.target.value)}} />
           </label>
          }
          <label htmlFor="email"><h4>Email</h4>
          <input type="email" id="email" onChange={(e)=> {setEmail(e.target.value)}} />
           </label>
          <label htmlFor="password"><div style={{display: "flex" , justifyContent:'space-between'}}>
          <h4>password</h4>
          {!isSingup &&<h4>forgot password</h4>}
            </div>
          <input type="password" id="password" onChange={(e)=> {setPassword(e.target.value)}} />
           </label>
           {isSingup && <p style={{color:"#007ac6", fontSize:"13px"}}>Passwords must contain at least eight characters, including at least 1 letter and 1 number.</p>}

           {isSingup && <from>
             <input type="checkbox" id="check-box" name="check-box" />
             <label htmlFor="check-box">
              <p  style={{fontSize: '13px'}}>  Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.</p></label>
            </from>}
           <button type="submit" className="submit-btn">{ isSingup ? "Sign up" : "Log in"}</button>
        </form>
        <p>
          {isSingup ? 'alreary have an account' : "don't have an account"}
          <button type="button" className="Handelswitch-btn" onClick={HandelSwitch}>{ isSingup ? 'log  in': 'sign up'}</button>
        </p>

        {isSingup && <p style={{color:'#666767', fontSize: '13px'}}>By clicking “Sign up”, you agree to our
        <span style={{color: "#007ac6"}}> terms of service,</span> 
        <span style={{color: "#007ac6"}}> fprivacy policy and </span>
        <span style={{color: "#007ac6"}}> cookie policy </span></p>}
      </div>
    </section>
  );
};

export default Auth;
