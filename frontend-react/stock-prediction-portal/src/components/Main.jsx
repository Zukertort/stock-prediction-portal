import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>

        <div className='container'>
            <div className='p5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Stock prediction portals aim to forecast future stock prices or market trends using data analysis and modeling techniques.The foundation of any prediction is data. Portals gather vast amounts of information from various sources, including.Raw data is often messy.his is the core where predictions are generated. Portals use one or more modeling approaches</p>
                <Button text='Explore Now' class='btn btn-info' url='/dashboard' />
            </div>
        </div>

    </>
  )
}

export default Main