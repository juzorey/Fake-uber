
import { useContext, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './comp/NavBar';
import PickupLocation from './comp/PickupLocation';
import RiderHome from './comp/RiderHome';
import DriverHome from './comp/DriverHome';
import DriverPickupLocation from './comp/DriverPickupLocation';
import { CSSTransition } from 'react-transition-group';
import Map from './comp/Map';
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css';

export const LocationContext =createContext();

function App() {



// const AnimatedSwitch = withRouter(({ location }) => (
//   <TransitionGroup>
//     <CSSTransition 
//       key={location.key} 
//       classNames="slide" 
//       timeout={1000}
//     >
//       <Switch location={location}>
//         <Route path='/first' component={First} />
//         <Route path='/second' component={Second} />
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup>
// ));

const[pickUpLocation,  setPickUpLocation]= useState({
  location:''

})
  return (
    <div className="main">
      <div className="nav-bar">
       <NavBar />
      </div>

      <div className="map-container"><Map/></div>
      
      <div className="locater">
        <LocationContext.Provider value={{pickUpLocation, setPickUpLocation}}>
        <Routes>
          <Route path="/Driver" element={<DriverHome />}/>
          <Route path="/Rider" element={<RiderHome/>}></Route>
          <Route path='/DriverPickupLocation' element={<DriverPickupLocation />}/>
          <Route path="/PickupLocation" element={<PickupLocation/>}></Route>

        </Routes>
        </LocationContext.Provider>
      </div> 
{/* 

       //can render th list of trips with map and event and have it props to a omp to display and return */}
      
    </div>
  );
}


export default App;
