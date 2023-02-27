import { useNavigate, Routes, Route } from 'react-router-dom'
import PickupLocation from './PickupLocation'
import {FaSearch} from 'react-icons/fa'
export default function StartSearch(){



  const showSearch = () => {
  
  }

  return(
    <div className='rider-container'>
      <div className="container">
        <div className="inner-container">
         <h2>Where would you like to be picked up?</h2>

          <div className="search-box">
            <div className="inner-search-box">
              <form className="form-search">
                <FaSearch className='icon-search' />
                <button className="input-search" onClick={showSearch}> <span className="in-btn">Where to?</span></button>

              </form>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}