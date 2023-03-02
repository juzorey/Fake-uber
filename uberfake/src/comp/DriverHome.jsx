import { useNavigate, Routes, Route } from 'react-router-dom'
import PickupLocation from './PickupLocation'
import {FaSearch} from 'react-icons/fa'
import {IoMdArrowRoundBack} from 'react-icons/io'
import React from "react"

export default function DriverHome(){


  let nav=useNavigate()
  const showSearch = () => {
  nav('/DriverPickupLocation')
  }

  return(

    <div className='rider-container'>
      <div className="container">
        <div className="inner-container">
        
         <h2> Driver Start a Trip</h2>

          <div className="search-box">
            <div className="inner-search-box">
              <form className="form-search">
                {/* <FaSearch className='icon-search' /> */}
                <button className="input-search" onClick={showSearch}> <span className="in-btn">Where to?</span></button>

              </form>
            </div>
          </div>
        </div>

        {/* <PickupLocation/> */}

      </div>
    </div>
  )
}