import React, { useState } from 'react'
{/* <link rel="stylesheet" href="Contact.css" /> */ }
import '../Components/Contact.css'

const Contact = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState(0)

    const handleSubmit = () => {
        if (!name || !email || !number || number.length > 10) {

            alert("invalid details! Please enter full details")
            return
        }
        else {
            
            alert("Form submitted successfully..\nName: " + name + "\nEmail: " + email + "\nNumber: " + number)
            return
        }
        // alert("Thank you for contacting us")
    }
    return (
        <>
            <h1 style={{marginTop:"40px",marginBottom:"20px"}} >Contact us !</h1>
            <div className="container1">

                <form action="" onSubmit={handleSubmit}>
                    <input type="text" onChange={(e) => setname(e.target.value)} placeholder="Enter Name" className='input' id='name' required /> <br />
                    <input type="text" onChange={(e) => setemail(e.target.value)} placeholder="Enter Email" className='input' id='email' required /> <br />
                    <input type='number' placeholder='Enter 10 Digits Mobile number ' onChange={(e) => setnumber(e.target.value)} className='input' id='number' required /><br />
                    <textarea placeholder='Message' className='input' id='msg' /><br />
                    <button className='btn2' id='btn1'> Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
