import React, {useEffect, useState} from 'react'
import axios from 'axios'



export default function UserProfile() {
  const [prof, setProf] = useState([])

  useEffect(() => {
   getAllBook()
  }, [])


  const getAllBook = async () => {
    const response = await axios.get('http://localhost:8000/api/museum/list/', 
    {
      headers: {
        "Authorization": "Token " + localStorage.getItem("token")
      }
    })
    console.log('axios done',response.data);
    setProf(response.data)
  }

  const deleteHandler = async (pk) => {
    console.log(pk)
    const response = await axios.delete(`api/museum/${pk}/delete`)
    await getAllBook()
  }


  const allBooking = prof.map(p  => (
    <table>
      <tr>
        <th>{p.name}</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <th>{p.origin}</th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type='submit' onClick={() => {deleteHandler(p.id)}} >DELETE</button>
      </tr>
  </table>
  ))

  return (
    
    <div className='able2'>          
    <table class="ta1"> 
        <thread>
          <tr>
            <th>Name :</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Origin :</th> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <th>Delete</th>
          </tr>
        </thread>
          {allBooking}
      </table>
    </div>
   
  )
}
