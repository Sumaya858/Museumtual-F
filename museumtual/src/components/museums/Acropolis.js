import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Acropolis() {

  const navigate = useNavigate()
  const [acropolis, setAcropolis] = useState({
        name : "Acropolis",
        origin : "Greece",
        image :"https://mtarch.com/wp-content/1300.jpg"
    })



    const bookHandler = async (event) => {
      if(isAuth){
      // event.preventDefault()
      console.log("tokenn", localStorage.getItem("token"))
      const response = await axios.post('http://localhost:8000/api/museum/create/', acropolis ,{
        headers: {
          "Authorization": "Token " + localStorage.getItem("token")
        }
      })
      console.log('axios done');
      navigate('/profile')
    }
    else
    {navigate('/login')}
    }

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

  


    

  return (
    <div>
        <br></br>
        <img src='https://www.the-travel-insiders.com/sites/default/files/field/articles/images/athens_acropolis_museum_gallery.jpg' alt='acro'></img> <img src='https://cdn.getyourguide.com/img/tour/640f0980da7e3.jpeg/97.jpg' alt='acro2'></img> <img src='https://www.definitelygreece.com/wp-content/uploads/2020/06/parthenon-marbles-acropolis-museum-athens.jpg' alt='acro3'></img> <img src='https://athensgreecenow.com/_imagery/2019-07-13/pottery-vase-exhibits-ancient-greece.jpg' alt='acro4'></img>
        
        <h3 className='Acropolis'>Acropolis</h3>
       
      <p className='brief'><strong>The Acropolis Museum is an archaeological site-specific museum, housing more than 3.000 famous artefacts from the Athenian Acropolis,
     <br></br>the most significant sanctuary of the ancient city. Located in the historical area of Makriyianni, southeast of the Rock of the Acropolis, the Museum narrates 
     <br></br>the story of life on the Rock from prehistoric times until the end of Antiquity.</strong>
     
     <br></br><br></br><a href="https://g.co/arts/QDKDqTEMZ85U7kzg9">Visit the Acropolis Museum</a>
     <br></br><br></br>
     Our visiting time:
     <br></br>Monday: 9:00 Am - 8:00 Pm
     <br></br>Tuesday: 9:00 Am - 8:00 Pm
     <br></br>Wednesday: 9:00 Am - 8:00 Pm
     <br></br>Thuresday: 9:00 Am - 8:00 Pm

     <br></br><br></br>
      
      
      
            <button className="checkoutBtn"onClick={bookHandler}>Checkout</button> 
     </p>
     <br></br>

    </div>
  )
}
