import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Blog = () => {
  const [data, useData] = useState([])
  useEffect(() => {
    axios.get('https://freetestapi.com/api/v1/posts')
      .then((res) => {
        console.log(res.data)
        useData(res.data)
      })
  }, [])
  return (
    <>
      {/* <h1>Blogs</h1> */}
      <div className="card4">
        {
          data.map((item) => (
            <div className="card5">
              <div className="card6">
                <h4 style={{marginTop:"10px"}} >Blog: {item.id}</h4>
                <p className='txt' ><b>Title:</b></p>
                <p>{item.title}</p>
                <br />
                <p className='txt' > Author:</p>
                <p>{item.author}</p>
                <br />
                <p className='txt' >Content:</p>
                <p>{item.content} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur enim, quam, est iste quis et magni aut dolores ipsam blanditiis, aliquam ab nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in commodi sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsa corporis blanditiis facere exercitationem facilis veniam quidem quis, odit, incidunt amet fuga aperiam mollitia nisi! Dicta quo rem eveniet, culpa quaerat quia obcaecati doloremque molestias facere amet dolores. Labore reiciendis nemo, qui temporibus odio earum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam laboriosam porro velit necessitatibus nemo iusto pariatur blanditiis nisi, quos vel aut cupiditate quasi ipsam placeat fugiat eveniet quo, ut perspiciatis minus? Rerum quod sequi beatae veritatis porro sapiente ducimus doloribus quia velit. Expedita maxime, ipsum suscipit consectetur veniam esse ad! Odit sed delectus natus voluptatibus, quia molestias accusantium quaerat doloribus esse quisquam blanditiis, commodi laborum dolor facere aspernatur nisi eligendi quam vitae quos, excepturi quibusdam. Labore, aliquam hic! Nisi, inventore accusamus qui minus sed iure quaerat totam ratione recusandae incidunt, delectus perferendis ipsam, temporibus porro! Veniam optio dicta quidem unde.</p>
                <br />
                <p><b>Likes:</b>  {item.likes}</p>
                <br />
                <p><b>Date of Post: </b><br />{item.timestamp.slice(0,10)}</p>
                {/* <p>{item.comments[]}</p> */}
              {/* <img className='image' src="../src/images/fblogo.png" alt="" /> */}
              <br />
              <p> <b>Share with: </b></p>
              <div className="card7">

              <Link target='__blank' to='https://www.facebook.com'> <img className='image' src='../src/images/fblogo.png' alt="" /></Link>
              <Link target='__blank' to='https://www.twitter.com'> <img className='image' src='../src/images/twitterlogo.png' alt="" /></Link>
              <Link target='__blank' to='https://www.linkedin.com'> <img className='image' src='../src/images/linkedinlogo.png' alt="" /></Link>
              </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Blog
