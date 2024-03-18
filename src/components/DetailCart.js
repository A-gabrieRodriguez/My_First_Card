import { Component } from "react";

const styles = {
  DetailCart: {
    barkgroundColor: "#fff",
    position: "absolute",
    marginTop: 30,
    boxShadow: "1px 5px 5px rgb(0,0,0,0.3)",
    borderRadius: "5px ",
    width: "300px",
    right: 50,
  },

};

class DetailCart extends Component {
  render() {
    //pasando el carro de compras
    const { cart } = this.props;
    return (
      <div style={styles.DetailCart}>
        <ul >
          {cart.map((x) => (
            <li key={x.name}>
              {/*colocando una imagen*/}
              <img alt={x.name} src={x.img} width="50" height="32" />
              {x.name}
              <span> {x.mount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DetailCart;
