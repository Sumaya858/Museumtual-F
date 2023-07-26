import {useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import {MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput} from 'mdb-react-ui-kit';

export default function Signup(props) {
    const [newUser, setNewUser] = useState({}); 
    const navigate = useNavigate();


    const changeHandler = (e) => { 
        const user = {...newUser}; 
        user[e.target.name] = e.target.value; //[e.target.name]: is the field name //[e.target.value]:field that I'm currently typing in 
        console.log(user);
        setNewUser(user);
     }

    const registerHandler = () => {
        props.register(newUser)
        navigate('/login')
      }
  

    return (

      <div>
        <h3 className="signup88" style={{letterspacing: "1px;"}}>Sign up</h3>
        <div className='boarder36'>

        <div className="pic22">
          <img src="https://cdn.britannica.com/51/194651-050-747F0C18/Interior-National-Gallery-of-Art-Washington-DC.jpg" alt='muse1'></img>
          </div>

        <div className='signup2'>
          <br></br>
           <input name = "username" type="text" id="form2Example18"  onChange={changeHandler} className="form-control form-control-lg" />
           <label className="form-label" for="form2Example18"> User Name </label>
        </div>

        <div className="signup3">
              <input name = "password1" type="password" id="form2Example28" onChange={changeHandler} className="form-control form-control-lg" />
              <label className="form-label" for="form2Example28"> Password </label>
             </div>

        <div className="signup4">
              <input name = "password2" type="password" id="form2Example28" onChange={changeHandler} className="form-control form-control-lg" />
              <label className="form-label" for="form2Example28"> Confirm Password </label>
             </div>

             <br></br>

        <div className="signup5">
              <button className="btn btn-info btn-lg btn-block" type="button" onClick={registerHandler} >Sign up</button>
             </div>
             <br></br>

            
          
          
          </div>

   </div>

)
    }
    
