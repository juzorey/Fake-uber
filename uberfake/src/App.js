import { Routes, Route } from 'react-router-dom';
import PickupLocation from './comp/PickupLocation';
import RiderHome from './comp/RiderHome';
import './App.css';

function App() {
  return (
    <div className="main">
      
      <Routes>
        <Route path="/" element={<RiderHome/>}></Route>
        <Route path="/PickupLocation" element={<PickupLocation/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
