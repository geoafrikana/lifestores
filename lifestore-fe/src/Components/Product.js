import {useContext} from 'react';
import {CartContext} from '../Contexts/CartContext';


function Product({product}){
  const [cart, setCart] = useContext(CartContext)
  var inCart = false
  const on = () =>{
                
    const cartlength = Object.keys(cart).length
    if (cartlength == false){
      setCart([...cart, product]);
        document.getElementById("overlay").style.display = "block"
    }
    else{    
    for (let i=0; i < cartlength; i++){
      if (product.name == cart[i].name ){
        var inCart = true
        break
      }
    }
      if (inCart){
        console.log("equal")
        document.getElementById("overlay").style.display = "block"
        document.getElementById(product.name).style.display = "block";
      }
      else{
        
        setCart([...cart, product]);
        document.getElementById("overlay").style.display = "block"
        document.getElementById(product.name).style.display = "block";
      }

      
      }
    }
    
    
    
    
  return(
        <div className="col">
              <div className="card shadow-sm">
                <img src= {product.image}
                 className="bd-placeholder-img card-img-top" 
                width="100%" height={225} 
                aria-label="Placeholder: Thumbnail"  
                focusable="false" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <small className="card-text">{product.description}</small>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button onClick={on} type="button" className="mt-3 btn text-light btn-primary btn-sm btn-outline-primary">Add to cart</button>
                    </div>
                    <small className="mt-3 text-muted">{product.price}</small>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Product;