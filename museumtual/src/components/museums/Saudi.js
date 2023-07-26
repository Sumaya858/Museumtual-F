import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Saudi() {

  const navigate = useNavigate()
  const [saudi, setSaudi] = useState({
        name : "Saudi National",
        origin : "Saudi",
        image :"https://mtarch.com/wp-content/1300.jpg"
    })



    const bookHandler = async (event) => {
      if(isAuth){
      // event.preventDefault()
      console.log("tokenn", localStorage.getItem("token"))
      const response = await axios.post('http://localhost:8000/api/museum/create/', saudi ,{
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
        <img src='https://mytrip.sa/wp-content/uploads/2018/10/6784961-1552727958.jpg' alt='sa'></img> <img src='https://nationalmuseum.moc.gov.sa/virtualtour/assets/images/mu2.jpg' alt='sa2'></img> <img src='https://www.thaqfny.com/wp-content/uploads/2022/08/6004254353_7aafe41030_b.jpg' alt='sa3'></img> <img src='https://alqiyady.awicdn.com/site-images/sites/default/files/alqiyady-prod/article/a/6/374191/94faef02d14e59c069ffd4c73f7eb24f8d127006-220920224759.jpg?preset=v3.0_970XDYN&save-png=1' alt='sa5'></img>

         <h3 className='Saudi'>Saudia Arabia</h3>
         
      <p className='brief'><strong>The Saudi National Museum is Science museum and it's characterized by a mixture of museum types, where knowledge<br></br> combines with 
      culture, language, and others. There is so much information about every aspect amd it's written in English and Arabic. <br></br>Here we take a virtual tour of the museum.</strong>
      <br></br><br></br><a href= "https://nationalmuseum.moc.gov.sa/National_Museum-ar.html#pano34/72.4/13.1/81.8">Visit the Saudi National Museum -Virtual Tour-</a>

      <br></br><br></br>
     Our visiting time:
     <br></br>Monday: 9:00 Am - 8:00 Pm
     <br></br>Tuesday: 9:00 Am - 8:00 Pm
     <br></br>Wednesday: 9:00 Am - 8:00 Pm
     <br></br>Thuresday: 9:00 Am - 8:00 Pm

           <br></br><br></br><button className="checkoutBtn" onClick={bookHandler}>Checkout</button></p>

    </div>
  )
}
