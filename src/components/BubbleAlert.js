import { Component} from "react";

const styles ={
    bubbleAlert:{
        backgroundColor: "#E9725A",
        borderRadius:"15px",
        color:"#fff",
        padding:"2px 10px",
        fontSize:"o.9rem",
        width:"20px"
    }
}

class BubbleAlert extends Component{
    //creando una funcion que resive un numero
    getNumber(n){
        if(!n){ return ""}
        return n >9 ? "9+":n
    }
    render(){
        //un valor que va a resivir value que viene de props
        const {value} = this.props
        return(
            <span style={styles.bubbleAlert}>
                {/*Llamando a la funcion getNumber(value*/}
                {this.getNumber(value)}
            </span>
        )
    }
}

export default BubbleAlert