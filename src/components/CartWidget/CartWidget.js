import Cart from '../CartWidget/Img/Cart.svg'
import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
    
const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' classname='CartWidget' style={{ display: totalQuantity > 0 ? 'lock' : 'none'}}>
            <img className="cart" src={Cart} alt='Cart-widget'/>
            { totalQuantity }
        </Link>
    )
}   

export default CartWidget 