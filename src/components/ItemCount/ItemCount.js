import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity +1)
        }
    } 
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button'onCLick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className ='Button'onCLick={increment}>+</button>
            </div>
            <div>
                <button className='Button' onClick={() => onAdd(quantity)} disable={!stock}>
                    Agregar al carrito
                </button>           
            </div>
        </div>
    )
}

export default ItemCount;