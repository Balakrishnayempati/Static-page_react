import React from "react";
function Rem(a)
{
    console.log(a)
    return(
        <div>
<h1>{a.children.name1}</h1>
<h1>{a.children.name2}</h1>
<h1>{a.children.name3}</h1>
        </div>
    )
}
export default Rem;