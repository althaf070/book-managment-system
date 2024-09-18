import { Link } from "react-router-dom"
import './nav.css'
const NavBar = () => {
  return (
   <nav>
    <div>
        <Link to='/'>BMS</Link>
    </div>
    <div>
    <Link to='/add'>Add Books</Link>
    </div>
   </nav>
  )
}

export default NavBar