import React from 'react'
import Signup from './components/user/Signup'
import Signin from './components/user/Signin'
import axios from 'axios';
import { useEffect, useState } from 'react'
import{BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom'
import Acropolis from './components/museums/Acropolis'
import Saudi from './components/museums/Saudi'
import Harvard from './components/museums/Harvard'

// import { Routes } from 'react-router-dom'
import Home from './components/homepage/Home'
import Museums from './components/museums/Museums'
// import Contact from './components/contact/Contact'
// import Cart from './components/cart/Cart'
// import Count from './components/cart/Count'

import About from './components/about/About'
import logo from './components/homepage/LOGO.png'
// import Profile from './components/profile/UserProfile'
import Logout from './components/museums/logout/Logout';


import './CSS/homepage.css'
import './CSS/about.css'
import './CSS/signin.css'
import './CSS/signup.css'
import './CSS/acropolis.css'

import UserProfile from './components/profile/UserProfile';


export default function App() {


  // what should the component render?
  const [isAuth, setIsAuth] = useState(false); 
  const [user, setUser] = useState({}); 
  
  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token != null) {
      // let user = jwt_decode(token)
      let user =token
      setIsAuth(true)
      setUser(user)
    } 
    else if (!user) {
      localStorage.remove("token")
      setIsAuth(false)
    }

  }, [])


  const registerHandler = (user) => {
    console.log('here is register handler')
    console.log(user);
    axios.post("http://127.0.0.1:8000/auth/register/", user) // same as python
    .then(res => {
      console.log(res)
    }) 
    .catch(err => {
      console.log(err)
    })
  }

  // const loginHandler = (credential) => {
  //   axios.post("http://127.0.0.1:8000/auth/login/", credential)  
  //   .then(res => {
  //     console.log(res.data.key)
  //     let token = res.data.key
  //     if (token != null) {
  //       localStorage.setItem("token", token)
  //       let user = token
  //       setIsAuth(true)
  //       setUser(user)
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }
  const loginHandler = (credential) => {
    axios.post('http://127.0.0.1:8000/auth/login/', credential)
      .then((res) => {
        console.log("hhhhhhhhhhhhhhhhhhh",res.data.key);
        const token = res.data.key;
        if (token) {
          localStorage.setItem('token', token);
          setIsAuth(true);
          setUser(token);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutHandler = (e) => {
    e.preventDefault() 
    localStorage.removeItem("token");
    setIsAuth(false)
    setUser(null)
  }
    // make sure to return some UI
    return (
      
      <>

      <Router>
        <img className='logo' src={logo} alt='L'></img>
        <nav className='nav'>
      <ul className="topnav-centered">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Museums">Museums</Link></li>
            <li>{isAuth? <Link to ="/profile">Profile</Link> : <Link to="/register">Signup</Link>}</li>
            <li>{isAuth? <Link to="/logout" onClick={logoutHandler}>Logout</Link> : <Link to="/login">Login</Link>}</li> 
            
            
            
             
          </ul>
          </nav>
      
       <Routes>
        <Route path="/register" element={<Signup register={registerHandler}></Signup>}></Route>
        <Route path="/login" element={isAuth ? <Navigate to='/' /> : <Signin login={loginHandler}></Signin>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route> 
        <Route path="/museums" element={<Museums />}></Route> 
        <Route path='/museums/Acropolis' element={<Acropolis />}></Route>
        <Route path='/museums/Saudi' element={<Saudi />}></Route>
        <Route path='/museums/Harvard' element={<Harvard />}></Route>
        <Route path="/logout" element={<logout logout ={logoutHandler}/>}></Route>

      </Routes>

      <footer>
        <div className='contact'><strong>
          <h5> Phone : +9731788855599</h5>
          <h5> Email : Museumtual@email.com</h5>
          <h5> Office : Building 1310, 355, Rd 9898, Manama</h5>
          </strong>

        </div>



      </footer>
      </Router>
      </>
     
    )
  }

