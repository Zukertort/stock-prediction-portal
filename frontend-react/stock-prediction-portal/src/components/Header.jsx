import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar conatiner pt-3 pb-3 px-5'>
            <Link className='navbar-brand' to='/'>Stock Prediction Portal</Link>

            <div>   
                <Button text='Login' class='btn btn-outline-info' url='/login' />
                &nbsp;
                <Button text='Register' class='btn btn-info' url='/register' />
            </div>
        </nav>
    </>
  )
}

export default Header