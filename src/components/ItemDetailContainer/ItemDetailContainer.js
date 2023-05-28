import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../asincMock'
import { useParams } from 'react-router-dom'
import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    
    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
}
export default ItemDetailContainer 