import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter,Routes, Switch, Route} from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros Servicios'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Servicios por categoria'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>  
        </CartProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App;
