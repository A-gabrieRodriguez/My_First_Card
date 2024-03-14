import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title"
import Navbar from "./components/Navbar"

class App extends Component {
  //creando estado inicial
  state = {
    products: [
      {
        name: "Tomato",
        price: 90,
        img: "https://imgs.search.brave.com/WgqjiG6yCesDstSMsCwIMiW78br-o5dydJdvI2d1BWU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FkL1RvbWF0b18n/U2NvcnBpbywnX1Nv/bGFudW1fbHljb3Bl/cnNpY3VtLmpwZw",
      },
      {
        name: "Carrot",
        price: 60,
        img: "https://imgs.search.brave.com/GTXMS69lpDsGWIcKmGso_0x6aRvo5COVvAR3_q0qlhI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTIw/MjY1MjAvcGhvdG8v/Y2Fycm90cy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9N1F6/VzRERW9IZFNKUU5p/aXRyM1c0UnZLOUxO/REMwVjR4aFVxNm9Z/THJPRT0",
      },
      {
        name: "Lettuce",
        price: 45,
        img: "https://imgs.search.brave.com/pSfD_GKxJ4DGQ-hUDWPi2lcFNxJklWLYTqCFTfoWgAE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTYz/NzM5ODIxL3Bob3Rv/L2xldHR1Y2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUcw/NEV4aTJSeG1STGYz/ZkxYdVpkdnp0aFV1/WHZMT2d1WWlqTEI3/WFNWcms9",
      },
      {
        name: "Bell Pepper",
        price: 120,
        img: "https://imgs.search.brave.com/46NkX5kfeUmdhYNKv_C2Dr2lwy-3CkwHFEgmY35r3G4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk4/MDEyMDgzL3Bob3Rv/L2JlbGwtcGVwcGVy/cy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RWV1b19sLW5F/SG1WU29KSVg5RGF3/anRZek43cjF6NzRu/SEk1aFhLQU9UZz0",
      },
      {
        name: "Broccoli",
        price: 75,
        img: "https://imgs.search.brave.com/GK6i-lArKBsLKfGhjqy3AtqtI4eOc9k8wvqdpLOZXO8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzEwLzM0LzM3/LzM2MF9GXzEwMzQz/NzQwXzNXM2l6cHo2/OWNxYW1jeXlLdGhj/RW9DQ2dQNXI3N2kw/LmpwZw",
      },
      {
        name: "Spinach",
        price: 50,
        img: "https://imgs.search.brave.com/DeRA2lHRsCD5Hyz4GcEqnwEkbTvewtC_khsdsxbpUPM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc3/NDIzMDc4L3Bob3Rv/L3NwaW5hY2gtb24t/d2hpdGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTEtWWtQ/OElZNWF3cmU1aVZF/YUM4Q0tTdHMyMWZN/Mjd4Y0ZWMmZreC1t/eXc9",
      },
      {
        name: "Cucumber",
        price: 55,
        img: "https://imgs.search.brave.com/_5rPOcd5fhNFUkFXMVmDm1ju76wfRjdnybY0SmhDjpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/MDA1NzUxOS9waG90/by9jdWN1bWJlci1p/c29sYXRlZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZG91/d2pFMFlxSkJ1S3Vm/Z2ZtWllTUnpkWG00/RDU3NE1xQW1BV3NH/UTNJdz0",
      },
      {
        name: "Onion",
        price: 40,
        img: "https://imgs.search.brave.com/xA9PJEwr9AySwlB8S1EDwK_ddZKBSp06vu1N7V08Sz8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9v/bmlvbl8xNDQ2Mjct/Mjc1MjguanBnP3Np/emU9NjI2JmV4dD1q/cGc",
      },
      {
        name: "Zucchini",
        price: 80,
        img: "https://imgs.search.brave.com/hULVle4Qm9XxYvLX9zZSL3fKiVNfdYhcdW1WRJTpai0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgzLzM3LzY0/LzM2MF9GXzgzMzc2/NDk5X2ZrN3BKczJY/Zm03NWszNThQa21R/eUtSbTU4SzJCTGFn/LmpwZw",
      },
    ],
    cart:[
      /*
      {
        name: "Tomato",
        price: 90,
        img: "https://imgs.search.brave.com/WgqjiG6yCesDstSMsCwIMiW78br-o5dydJdvI2d1BWU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FkL1RvbWF0b18n/U2NvcnBpbywnX1Nv/bGFudW1fbHljb3Bl/cnNpY3VtLmpwZw",
        mount:0,
      }
      */

    ]
  };

  //creando funcion para agregar al cart
  addProduct=(product)=>{
    console.log(product)
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Layout>
          <Title/>
          <Products
            addProduct={this.addProduct}
            products={this.state.products}
          />
          <p>hola mundo</p>
        </Layout>
      </div>
    );
  }
}

export default App;
