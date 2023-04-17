import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'
import logo from './imgLogo/logo.png'
import Cart from '../CartWidget/Img/Cart.svg'

const Navbar = () => {
    return (
            <nav className="navBar">
        <Link to='/'>  
          <img className="imgLogo" src={logo} alt="logo" />
        </Link>
        <div className='Categories'>
          <NavLink to= {`/category/Services Mantenimiento`} activeClassName="active" className={ 'links'}>Mantenimiento Integral</NavLink>
          <NavLink to={`/category/Services Cerrajeria`} activeClassName="active" className={ 'links'}>Cerrajeria y Mobiliario</NavLink>
          <NavLink to= {`/category/Services Electricidad`}  activeClassName="active" className={ 'links'}>Electricidad</NavLink>
          </div>  
          <CartWidget />
        </nav>
    )
}   

export default Navbar