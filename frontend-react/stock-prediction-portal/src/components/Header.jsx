import React from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useState, useContext, createContext } from 'react'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    setIsLoggedIn(false)
    console.log('Logout');
    navigate('/login')
  }
  return (
    <>
        <nav className='navbar conatiner pt-3 pb-3 px-5'>
            <Link className='navbar-brand' to='/'>Stock Prediction Portal</Link>

            <div>   
              {isLoggedIn ? (
                <>
                <Button text='Dashboard' class='btn btn-info' url='/dashboard' />
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </>
              ) : (
                  <>
                  <Button text='Login' class='btn btn-outline-info' url='/login' />
                  &nbsp;
                  <Button text='Register' class='btn btn-info' url='/register' />   
                  </> 
                )
              }
            </div>

        </nav>
    </>
  )
}

export default Header