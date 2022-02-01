import {useState, useContext} from 'react';
import {CartContext} from '../Contexts/CartContext'

export default function CartItem(props){
    const itemname = props.item.name
    const [quantity, setQuantity] = useState(1)
    const [cart, cartState] = useContext(CartContext)
    
    const remove = ()=>{
;        document.getElementById(itemname).style.display = "none"
          }
        
    
    const increase = () =>{
         setQuantity( quantity + 1 )
     }

    const decrease=()=>{
        if (quantity == 1){
            setQuantity(1)
        }
        else{
            setQuantity(quantity - 1)
        }
    }
    
 return(
    
    <div id={props.item.name} className="row">
    <div className="col-sm">
    <p>{props.item.name}</p>
    </div>
    <div className="col-sm">
    <button onClick = {decrease}  className="remove bg-warning">-</button>
    <button onClick={increase} className="add bg-primary">+</button>
    <button onClick={remove} className="add bg-danger">X</button>
        
    </div>
    <div className="col-sm">
      <p><span>{quantity}</span> x &#8358;<span>{props.item.price}</span></p>
      
    </div>
    <hr />
  </div>
  
 
)
 }