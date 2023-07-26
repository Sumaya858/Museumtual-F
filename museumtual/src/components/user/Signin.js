import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput} from 'mdb-react-ui-kit';
export default function Signin(props) {
    
    const [newUser, setNewUser] = useState({}); 
    const navigate = useNavigate();



    const changeHandler = (e) => { 
        const user = {...newUser}; 
        user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
        navigate('/')

    }

  return (
    
    <div>
      <h3 className="signin88" style={{letterspacing: "1px;"}}>Log In</h3>
      <div className='boarder36'>

        <div className="pic23">
          <img src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg" alt='muse1'></img>
          </div>

          <div className="login2">
              <input type="email" name='username' onChange={changeHandler} id="form2Example18" className="form-control form-control-lg" />
              <label className="form-label" for="form2Example18"> User Name  </label>
            </div>

            <div className="login3">
              <input type="password" id="form2Example28" name='password' onChange={changeHandler} class="form-control form-control-lg" />
              <label className="form-label" for="form2Example28"> Password </label>
            </div>
            <br></br>  

            <div className="login4">
            <button className="btn btn-info btn-lg btn-block" type="button" onClick={loginHandler}>Login</button>
            </div>
            

            <p className='acc89'>Don't have an account? <a href='/register' className="link-info">Register here</a></p>

            </div>


    </div>
  )
    }
           