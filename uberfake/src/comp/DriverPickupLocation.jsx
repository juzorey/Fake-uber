import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { useEffect } from 'react'
import { useContext } from 'react'
import { LocationContext } from '../App';
import {FaSearch, FaDot} from 'react-icons/fa'
// import {RxDot} from 'reacts-icons/rx'

export default function DriverPickupLocation() {

const{pickUpLocation, setPickUpLocation} = useContext(LocationContext)


  const[dropOff, setDropOff] = useState(false)
  //this has to go into the state of map center
  // const[pickup, setPickup] = useState(
  //   {
  //    location:''
  //   }
  // )

  // const handleChange = (e)=>{
  //   setPickup({...pickup, [e.target.id]:e.target.value})
  //   console.log(pickup,'on')

  //     }
      const handleChange = (e)=>{
        setPickUpLocation({...pickUpLocation, [e.target.id]:e.target.value})
        console.log(pickUpLocation,'on')
    
        
   
  
    

 //Los%20Angeles
  const getPickupLocation = async()=>{

    if(pickUpLocation.locationStart === 'e 4th street los angeles'){
      const search_text = pickUpLocation.locationStart
    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ`)
    
    console.log(res.data.features[0].center) //res.data.features[0].bbox for bbox //res.data.features[0].center for the specific location
    setPickUpLocation({...pickUpLocation, locationStartLat:res.data.features[0].center[0], locationStartLng:res.data.features[0].center[1]})
    console.log(pickUpLocation,'on')

  }
  else if(pickUpLocation.locationEnd === 'jefferson park los angeles'){
    const search_text = pickUpLocation.locationEnd
    const res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=pk.eyJ1Ijoiam9zZXIxMTcxIiwiYSI6ImNsZW5hbXNudTFkYXgzeHF2bHpkcDJlOWQifQ.PC61kaqdxMq8ByRGyadaPQ`)
    
    console.log(res.data)
  }


}
getPickupLocation()

      }

  



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
                    <input className="input-search" type="text" id="locationStart" value={pickUpLocation.locationStart} onChange={handleChange} onClick role="searchbox" placeholder="Starting Location" />
                  </form>
                </div>
              </div>
            

              <div className="destination-location">
                <div className="search-box">
                  <div className="inner-search-box">
                    <form className="form-search">
                      {/* <RxDot className='icon-search' /> */}
                      <input className="input-search" type="text" role="searchbox" id="locationEnd" value={pickUpLocation.locationEnd} onChange={handleChange} placeholder="Destination" />
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

