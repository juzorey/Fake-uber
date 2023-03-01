import { Link } from "react-router-dom"
export default function NavBar() {
  return(
    <div>
   
      <nav className="navbar">

        <div className="links">
          <div className="homelink">
            <Link to="/" className="link-style">UberFake</Link>
          </div>
          <Link to className="link-style">Account</Link>
          <Link to className="link-style">Wallet</Link>
          <Link to className="link-style">Trips</Link>
        </div>
      </nav>

      
    </div>
  )
}