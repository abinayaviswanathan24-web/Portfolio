import React, { useState } from 'react'
 import { ToastContainer, toast } from 'react-toastify';
 import Header from'./Common/Header';
import Footer from'./Common/Footer';
function Signup() {

 const[fname , setFname] = useState('')
 const[lname , setLname] = useState('')
 const[uname , setUname] = useState('')
 const[pass , setPass] = useState('')
 const[num , setNum] = useState('')

  const handleSignup = (e) =>{
    e.preventDefault()

    if(fname =='' || lname == '' || uname == '' || pass =='' || num == ''){
      toast.error("pls fill all the details")
      
    }else{
      toast.success("signup success")
      localStorage.setItem("Username" , uname)
      localStorage.setItem("password" , pass)

      setTimeout(() =>{
      window.location.href = "/loginpage"
    },5000)
  }

  }
  return (
    <div>
      <ToastContainer/>
      <Header/>
        <h1>
            This is signup page

        </h1>
        <form onSubmit={handleSignup}>
        <input type='text' placeholder='Enter your First name' value={fname} onChange={(e)=> setFname(e.target.value)}/>
        <input type='text' placeholder='Enter your Last name' value={lname} onChange={(e)=> setLname(e.target.value)}/>
        <input type='text' placeholder='Enter your  Username' value={uname} onChange={(e)=> setUname(e.target.value)}/>
        <input type='password' placeholder='Enter your  password' value={pass} onChange={(e)=> setPass(e.target.value)}/> 
        <input type='number' placeholder='Enter your  number' value={num} onChange={(e)=> setNum(e.target.value)}/>
        <button type='submit'>Signup</button>
        </form>

<Footer/>
    </div>
  )
}

export default Signup