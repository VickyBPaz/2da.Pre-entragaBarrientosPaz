import Cart from '../CartWidget/Img/Cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img className="cart" src={Cart} alt="Cart"/>
            0            
        </div>
    )
}   

export default CartWidget 