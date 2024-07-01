import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/posts')
      .then(res => {
        // console.log(res.data)
        setData(res.data)
        console.log(res.data);
      })
  }, [])
  return (
    <>
      <h1 style={{marginTop:"25px", display:"flex", justifyContent:"center"}} >All Blogs</h1>
      <div className="card1">

        {
          data.map((item) => (
            <div className="card2">
              <div className="card3">
                <p className='txt' ><b>Title:</b></p>
                <p>{item.title}</p>
                <br />
                <p className='txt' > Author:</p>
                <p>{item.author}</p>
                <br />
                <p className='txt' >Content:</p>
                <p>{item.content.slice(0, 30)}....</p>
                <br />
                <li> <Link to='/Blog' > <button className='btn' > See Full Content </button> </Link> </li>


              </div>

            </div>
          ))
        }



      </div>
    </>
  )
}

export default Home
