import React from 'react'

const Header = () => {
  return (
    <>
        <nav className='navbar conatiner pt-3 pb-3'>
            {/* <div className='container-fluid'> */}
                <a className='navbar-brand text-light'>Stock Prediction Portal</a>
            {/* </div> */}
            <div>   
                <a className='btn btn-outline-info'>Login</a>
                &nbsp;
                <a className='btn btn-info'>Register</a>
            </div>
        </nav>
    </>
  )
}

export default Header