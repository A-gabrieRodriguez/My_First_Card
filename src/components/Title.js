import { Component } from "react";

const styles={
    title:{
        marginButton: "30px"
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={styles.title}>Title of my shop</h1>
        )
    }
}

export default Title