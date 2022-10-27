import { GiHamburgerMenu } from "react-icons/gi"
import { FaSearch } from "react-icons/fa"
import { FiShoppingCart, } from "react-icons/fi"


import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__title" style={{display: "flex", justifyContent: "center"}}>
        <GiHamburgerMenu className="hamburger__menu" size={40} />
        Kosova Store</div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <input type="text" className="navbar__search__input" placeholder="Search for products" />
        <button type="button" className="navbar__fasearch"><FaSearch size={25}/></button>
      </div>
      <div >
        <button className="navbar__log__in">
          Log In
        </button>
        <FiShoppingCart className="navbar__shopping__cart" size={40} />
      </div>
    </div>
  )
}

export default Navbar;
