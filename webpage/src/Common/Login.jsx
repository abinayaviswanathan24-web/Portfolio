import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from './Header'
import Footer from './Footer'

function Login() {

  const [uname, setUname] = useState('')
  const [pass, setPass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    const username = localStorage.getItem("Username")
    const password = localStorage.getItem("password")

    // Empty validation
    if (uname === '' || pass === '') {
      toast.error("Please fill all the details")
    }

    // Login validation
    else if (uname === username && pass === password) {
      toast.success("Login success")

      setTimeout(() => {
        window.location.href = "/dashboardpage"
      }, 2000)
    }

    // Wrong username/password
    else {
      toast.error("Invalid username or password")
    }
  }

  return (
    <div>

      <Header />

      <ToastContainer />

      <h1>This is Login Page</h1>

      <form onSubmit={handlelogin}>

        <input
          type="text"
          placeholder="Enter your Username"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

      <Footer />

    </div>
  )
}

export default Login