import {useContext} from 'react';
import {CartContext} from '../Contexts/CartContext'
import CartItem from '../Components/cartItem'

function Overlay(){
    const [cart, setCart] = useContext(CartContext)
    
    const off = (e) => {
          if (e.target === document.getElementById("overlay")) {
            document.getElementById("overlay").style.display = "none"; 
        }
            else{
                document.getElementById("overlay").style.display = "block";
            }
          
          
    }

    const items = [{name: "hello", price:12},
{name:"good",
price: 200}]
      
    return (
        <div id="overlay" onClick={off}>
  <div id="text">
  <div className="container">
  <div className="row">
    <div className="col">
      <h3 className="mb-3">Cart Items</h3>
    </div>
  </div>
  

  


{cart.map((item)=>(<CartItem  item={item} />))}
    
  <div>
      <button className="checkout bg-warning">Checkout</button>
  </div>
</div></div></div>
        )
}

export default Overlay;