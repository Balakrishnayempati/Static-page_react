import React from "react";
import "./Product.css"
function Product({items})
{
    return(
        <div>
            {items.map((item)=>{
                return(
                    <div id="item">
                      <h1>ID: {item.id}</h1>
                      <h1>Type: {item.name}</h1>
                      <h1>Price: {item.cost}</h1>
                        </div>
                )
            })}
        </div>
    )

}
export default Product;