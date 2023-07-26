import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Logout({ setIsAuth, setUser }) {

        const navigate = useNavigate();
      
        const logout = () => {
          localStorage.removeItem("token");
          setIsAuth(false);
          setUser(null);
          navigate('/');
        }
      
        return <button onClick={logout}>Logout</button>;
      }

