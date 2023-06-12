import ProductCard from "./ProductCards";
import Button from 'react-bootstrap/Button';


function Products() {
    return (
     <div>
  
      <ProductCard />
      <div  className="mb-2 text-center p-3">
        <Button  size="lg" style={{backgroundColor:'#F86438', border: '0'}}>
          See More
        </Button>
      </div>
      
      
     
     </div>
    );
  }
  
  export default Products;