import "./ProductList.css"
import Product from "../Product/Product"
import { Products } from "../../data";
const ProductList= ()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & Inspire</h1>
                <p className="pl-desc">
                    
                </p>
            </div>

            <div className="pl-list">
                {Products.map((item)=>(
                    <Product key={item.id} img={item.img} link={item.link}/>

                ))}
               
            </div>

        </div>
    );
};

export default ProductList