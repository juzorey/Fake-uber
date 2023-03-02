import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div>
   
      <nav className="navbar">

        <div className="links">
          <div className="homelink">
            <Link to="/" className="link-style">UberFake</Link>
          </div>
  
          <Link to="/Rider" className="link-style">Rider</Link>
          <Link to="/Driver" className="link-style">Driver</Link>
          <Link to className="link-style">Trips</Link>
          <Link to className="link-style">Account/Wallet</Link>
        </div> 
      </nav>

      
    </div>
  )
}