import { Routes, Route } from 'react-router-dom';
import NavBar from './comp/NavBar';
import PickupLocation from './comp/PickupLocation';
import RiderHome from './comp/RiderHome';
import { CSSTransition } from 'react-transition-group';
import Map from './comp/Map';
import 'mapbox-gl/dist/mapbox-gl.css';

import './App.css';

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

  return (
    <div className="main">
      <div className="nav-bar">
       <NavBar />
      </div>

      <div className="map-container"><Map/></div>
      
      <div className="locater">
        <Routes>
          <Route path="/" element={<RiderHome/>}></Route>
          <Route path="/PickupLocation" element={<PickupLocation/>}></Route>

        </Routes>
      </div> 
{/* 

       //can render th list of trips with map and event and have it props to a omp to display and return */}
      
    </div>
  );
}


export default App;
