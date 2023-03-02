import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useEffect } from 'react'

import {FaSearch, FaDot} from 'react-icons/fa'
// import {RxDot} from 'reacts-icons/rx'

export default function DriverPickupLocation() {




  const[dropOff, setDropOff] = useState(false)
  const[pickup, setPickup] = useState(
    {
     location:''
    }
  )

  const handleChange = (e)=>{
    setPickup({...pickup, [e.target.id]:e.target.value})
    console.log(pickup)

      }

    const search_text = pickup.location


    

 //Los%20Angeles
  const getPickupLocation = async()=>{
    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ`)
    console.log(res.data) //res.data.features[0].bbox for bbox //res.data.features[0].center for the specific location
  }
  getPickupLocation()

  



  let navigate = useNavigate()

  const goBack = (e) => {
    navigate('/Driver')

  }
  
  return(
    <div className="pikcup-end-location-container">
      <div className='rider-container'>
        <div className="container">

          <div className="inner-container">
                <h2> <span> <IoMdArrowRoundBack onClick={goBack}/> </span>Enter Trip starting point and destination?</h2>

            <div className='la'>
      
              <div className="search-box">
                <div className="inner-search-box">
                  <form className="form-search">
                  {/* <RxDot className='icon-search' /> */}
                    <input className="input-search" type="text" id="location" value={pickup.location} onChange={handleChange} role="searchbox" placeholder="Starting Location" />
                  </form>
                </div>
              </div>
            

              <div className="destination-location">
                <div className="search-box">
                  <div className="inner-search-box">
                    <form className="form-search">
                      {/* <RxDot className='icon-search' /> */}
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

