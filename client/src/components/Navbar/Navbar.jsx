import React ,{ useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import decode from "jwt-decode";

import logo from "../../assests/logo-img.svg";
import "./navbar.css";
import search from "../../assests/search-img.png";
import Avatar from "../Avatar/Avatar";

import { setCurrentUser } from '../../actions/currentUser.js'


const Navbar = () => {
  const dispatch =useDispatch()
  var User = useSelector((state) =>(state.currentUserReducer))
  const navigate = useNavigate()
  
  const handleLogout = () => {
    dispatch({type: "LOGOUT"});
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() =>{
    const token = User?.token;

    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  return (
    <nav className="main-navbar">
      <div className="navbar">
        <Link to="/" className="navbar-logo nav-item nav-btn ">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Product
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Teams
        </Link>
        <form>
          <input type="text" placeholder="search" />
          <img src={search} alt="img" className="search-icon" />
        </form>
        {User === null ? 
          <Link to="/Auth" className="nav-item nav-btn" >
            Log in
          </Link>
        : 
          <>
           
              <Avatar backgroundColor="#009dff" px="10px" py="8px" borderRadius="50%" color="white"> <Link to={`/Users/${User?.result?._id}`} style={{textdecoration:'none'}}> {User.result.name.charAt(0).toUpperCase()} </Link></Avatar>
           
            <button className="nav-item nav-links" onClick={ handleLogout}>Log out</button>
          </>
        }
      </div>
    </nav>
  );
};

export default Navbar;
