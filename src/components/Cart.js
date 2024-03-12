import { Component } from "react";
import BubbleAlert from "./BubbleAlert"
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
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert/>
                </span>
                <button style={styles.cart}>
                    My cart
                </button>
            </div>
        )
    }
}

export default Cart