import React from 'react';
import Nav from './Components/Nav';
import Overlay from './Components/Overlay';
import ProductsContainer from './Components/ProductsContainer'
import data from './data';
import "./index.css";
import {useState} from 'react';
import {CartContext} from "./Contexts/CartContext"




function App(){
    const {products} = data;
    const cartstate = useState([]);

    return(<div className="App">
    <Nav />
    <CartContext.Provider value={cartstate}>
    <ProductsContainer products={products}/>
    <Overlay />
    </CartContext.Provider>

    </div>
        
        )
}

export default App;