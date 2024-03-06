import { Component } from "react";
import Button from "./Button"
const style = {
    product:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding:'10 px 15px',
        borderRadius:'5px ',
    },
    img:{
        width:'100%',
        height:"50%"
    }
}
class Product extends Component {
    render (){
        const {product,addProduct} = this.props

        return(
            <div style={style.product}>
            <img style={style.img} alt={product.name} src={product.img}/>
            <h3>{product.name}</h3>
            <p>{product.price }</p>
            <Button onClick={()=> addProduct(product)}>
                Add to cart
            </Button>  
            </div>
        )
    }
}

export default Product