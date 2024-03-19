import { Component } from "react";
import BubbleAlert from "./BubbleAlert"
import DetailCart from "./DetailCart"
const styles ={
    cart:{
        backgroundColor:"#359A2C",
        color:"#fff",
        border:"none",
        padding:"15px",
        borderRadius:"15px",
        cursor:"pointer"
    },
    bubble:{
        //la propiedad position es para moverse
        //en relacion al componente que lo enbuelve
        position:"relative",
        left:12,
        top:20
     }
}

class Cart extends Component {
    render(){        
        //Agarrando valores que vienen de Navbar.js
        const {cart} = this.props
        const {cart_visible} = this.props
        const {showCart} = this.props
        
        /*sumando productos del arrelo con propiedad reduce*/
        const mount = cart.reduce((acc,el)=> acc + el.mount, 0)
        return(
            <div>
                <span style={styles.bubble}>
                
                    {/*pasando un valor de mount(cantidad) */}
                    {/*RENDERIZADO CONDICIONAL*/}    
                {mount !==0 
                    ? <BubbleAlert value={mount} />
                    : null
                }
                </span>
                <button style={styles.cart}>
                    My cart
                </button>
                
                {/* pasando carro de compras */}
                <DetailCart cart={cart}/>
            </div>
        )
    }
}

export default Cart