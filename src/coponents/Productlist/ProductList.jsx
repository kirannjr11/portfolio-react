import "./ProductList.css"
import Product from "../Product/Product"
import { Products } from "../../data";
const ProductList= ()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title"> Create & Inspire</h1>
                <p className="pl-desc">
                My proficiency extends beyond mere code; I pride myself on my ability to empathize with users and tailor my creations to meet their needs seamlessly. Collaboration is second nature to me, as I relish the opportunity to work in multidisciplinary teams, where my skills harmoniously merge with others' to create exceptional results. Detail-oriented and dedicated, I approach every project with a meticulous eye, ensuring that even the smallest elements contribute to a cohesive and polished final product.
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