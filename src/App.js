import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'
import Items from './Components/Items/Items'
import Navbar from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart'
import Footer from './Components/Footer/Footer'
import Button from 'react-bootstrap/Button';
import { getCLS, getFID, getLCP } from 'web-vitals';
import './index.css';




function App() {
  const [product,setProduct] = useState([]);
  const [cartItems,setCartItem] = useState([])
  useEffect(()=>{
    async function fetchData(){
       const data = await fetch('https://fakestoreapi.com/products');
       const jsonData = await data.json();
       setProduct(jsonData)
    }
    fetchData();
  },[])
  function receiveData(d){
     let newItem = [...cartItems,d];
     setCartItem(newItem)
  }
 
  return (
    <>
     <BrowserRouter>
      <Navbar/>

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/items/men' element={<Items product={product} category={`men's clothing`} receiveData={receiveData}/>}/>
        <Route path='/items/women' element={<Items product={product} category={`women's clothing`} receiveData={receiveData}/>}/>
        <Route path='/items/cart' element={<Cart cartItems={cartItems}/>}/>
       </Routes>
       {/* <Footer/> */}
     </BrowserRouter>
    </>
  );
}

export default App;


