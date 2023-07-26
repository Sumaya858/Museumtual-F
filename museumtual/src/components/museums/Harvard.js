import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


 export default function Harvard() {
  
  const navigate = useNavigate()
  const [harvard, setHarvard] = useState({
        name : "Harvard",
        origin : "Cambridage",
        image :"https://mtarch.com/wp-content/1300.jpg"
    })



    const bookHandler = async (event) => {
      if(isAuth){
      // event.preventDefault()
      console.log("tokenn", localStorage.getItem("token"))
      const response = await axios.post('http://localhost:8000/api/museum/create/', harvard ,{
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

const [titles, setTitles] = useState([]);

useEffect(() => {
  // Make the API request
  fetch('http://localhost:8000/api/exhibition/')
    .then((response) => response.json())
    .then((data) => {
      // Once data is retrieved, extract the titles and store them in the state
      setTitles(data.message.records.map((record) => record.title));
    })
    .catch((error) => {
      console.error('Error fetching exhibition data:', error);
    });
}, []);
 
  // const [post, setPost] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);

  // if (!post) return null;


  return (

    <div>

      {/* <h4 className='h'>{message.info}</h4> */}
        
        {/* {(!basicModal)&& <Cart/>} */}

        <img src='https://nrs.hvrd.art/urn-3:HUAM:CARP03721_dynmc?width=280' alt='ha1'></img> <img src='https://nrs.hvrd.art/urn-3:HUAM:INV015910_dynmc?width=280' alt='ha2'></img> <img src='https://nrs.hvrd.art/urn-3:HUAM:779525?width=280' alt='ha3'></img> <img src='https://nrs.hvrd.art/urn-3:HUAM:INV042915_dynmc?width=3000&height=3000' alt='ha4'></img> <img src='https://nrs.hvrd.art/urn-3:HUAM:46482_dynmc?width=280' alt='ha5'></img>
        <h3 className='Harvard'>Harvard</h3>
        
      <p className='brief'><strong>Harvard Museum is an  Art Museum where you can see arts from the ancient time to now. The museums have played 
        <br></br>a leading role in the development of art history, conservation, and conservation science, and in the evolution of the art museum as an institution.
        <br></br> There is list below of the museum related.</strong><br></br>
     <br></br><br></br> <a href="https://harvardartmuseums.org/">Visit the Harvard Museum</a>
     <br></br><br></br>
     Our visiting time:
     <br></br>Monday: 9:00 Am - 8:00 Pm
     <br></br>Tuesday: 9:00 Am - 8:00 Pm
     <br></br>Wednesday: 9:00 Am - 8:00 Pm
     <br></br>Thuresday: 9:00 Am - 8:00 Pm

     <br></br><br></br><button className="checkoutBtn" onClick={bookHandler}>Checkout</button></p>

   





<div className='details'>
  <p className='title'><strong>Titles of Exhibitions we held through out  the year:</strong></p>
  <ul className='map'>
    {titles.map((title) => (
      <li key={title}>{title}</li>
    ))}
  </ul>
</div>




    </div>

    
  
)}
