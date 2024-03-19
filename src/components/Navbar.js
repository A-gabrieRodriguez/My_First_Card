import { Component } from "react";
import Logo from "./Logo"
import Cart from "./Cart" 

const styles={
    navbar:{
        display:"flex",
        flex:"row",
        alignItems:"center",
        height:"100px",
        justifyContent: "space-between",
        position:"relative",
        padding:"0 50px",
        boxShadow: "0 2px 3px rgb(0,0,0,0.1)"
    }
}

class Navbar extends Component {
    render() {
        //pasando el arreglo cart que viene de prop
        //que viene mandado por app.js en el componente app.js
        const {cart} = this.props
        
        //Agarrando las propiedades pasadas desde App.js, en este caso
        //agarramos el valor cart_visible y la funcion showCart
        const {cart_visible} = this.props
        const {showCart} = this.props

        return (
            <nav style={styles.navbar}>
                <Logo/> 

                {/*pasando e arreglo cart al componente cart*/}
                <Cart 
                cart={cart} 
                cart_visible={cart_visible} 
                showCart={showCart}
                />
            </nav>
        );
    }
}

export default Navbar