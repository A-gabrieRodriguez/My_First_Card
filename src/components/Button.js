import { Component } from "react";
const styles = {
    button:{
    backgroundColor: "#0A283E",
    color: "#fff",
    padding:"10px 15px",
    border:"none",
    borderRadius: "5px",
    cursor:"pointer"
    }
}

class Button extends Component {
    render(){
        return(
            
            //La propiedad  ...this.props pasamos la propiedades que 
            //resive el componente de botton, en este caso el componente
            //de Button en el archivo product tiene la propiedad de onClick
            <button style={styles.button} {...this.props}  />
        )
    }
}

export default Button