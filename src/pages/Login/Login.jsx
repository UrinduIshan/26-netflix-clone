import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png' 

const Login = () => {
  const [signState, setSignState] = useState("Sign Up")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==='Sign Up' && <input type="text" placeholder='Your name' />}
          <input type="email" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <div className='center'>
              <p>New to Netflix?</p>
              <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
            </div>
          ) : (
            <div className='center'>
              <p>Already have an account?</p>
              <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
