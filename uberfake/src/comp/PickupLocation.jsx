import {FaSearch, FaDot} from 'react-icons/fa'
import {RxDot} from 'react-icons/rx'

export default function PickupLocation() {
  return(
    <div className="pikcup-end-location-container">
      <div className='rider-container'>
        <div className="container">

          <div className="inner-container">
                <h2>Where would you like to be picked up?</h2>

            <div className='la'>
      
              <div className="search-box">
                <div className="inner-search-box">
                  <form className="form-search">
                  <RxDot className='icon-search' />
                    <input className="input-search" type="text" role="searchbox" placeholder="Pickup Location" />
                  </form>
                </div>
              </div>
            

              <div className="destination-location">
                <div className="search-box">
                  <div className="inner-search-box">
                    <form className="form-search">
                      <RxDot className='icon-search' />
                      <input className="input-search" type="text" role="searchbox" placeholder="Destination" />
                    </form>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}