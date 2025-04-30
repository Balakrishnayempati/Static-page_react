import React from "react";
import Nav from "./Components/Navbar/Nav";
import Product from "./Components/Navbar/Product/Product";
import products from "./Components/Products/Products";

function App()
{
  return(
    <div>
<Nav/>
<Product items={products}/>


    </div>
  )
}
export default App;