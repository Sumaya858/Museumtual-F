import React from 'react'
import axios from 'axios'
import Museum from '../homepage/Museum.mp4'



export default function Home() {
  return (
    <body>
    

<br></br>

 <div className='overlay'> <video src={Museum} autoPlay loop  height={450} /></div>
     

<br></br> <p className='qoaut1'><strong>Every civilizations depends upon <br></br>the quality of the 
 indivisualss it produces.
 <br></br>- Frank Herbert -</strong> </p>

 <br></br> <p className='qoaut2'><strong>You Have to know the past to understand the present. 
  <br></br>- Carl Sagan</strong> -</p>
    

    </body>
    

  )
}
