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
        return (
            <nav style={styles.navbar}>
                <Logo/> 

                {/*pasando e arreglo cart al componente cart*/}
                <Cart cart={cart}/>
            </nav>
        );
    }
}

export default Navbar