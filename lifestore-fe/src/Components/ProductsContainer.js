import Product from './Product';


function ProductsContainer(props){ 
   const {products} = props;
   
    return(
      
        <div className="album py-5 bg-light">
        <div className="container">
          
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products.map((product)=>(<Product key={product.sku} product={product} />))

          }

          </div>
          </div>
          </div>
         
        );
}

export default ProductsContainer;