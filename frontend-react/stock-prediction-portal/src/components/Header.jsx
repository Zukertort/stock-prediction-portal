import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar conatiner pt-3 pb-3 px-5'>
            <a className='navbar-brand text-light'>Stock Prediction Portal</a>

            <div>   
                <Button text='Login' class='btn btn-outline-info' />
                &nbsp;
                <Button text='Register' class='btn btn-info' />
            </div>
        </nav>
    </>
  )
}

export default Header