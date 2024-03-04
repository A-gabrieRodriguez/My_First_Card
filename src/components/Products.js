import { Component } from "react";
import Product from "./Product"
class Products extends Component {
    render (){
        //definiendo propiedades del componente
        const { products, addProduct} = this.props
        return(
            <div>
                {
                    products.map(product =>
                        <Product 
                            addProduct = {addProduct}
                            key = {product.name}
                            product ={product}
                        />)}
            </div>
        )
    }
}

export default Products