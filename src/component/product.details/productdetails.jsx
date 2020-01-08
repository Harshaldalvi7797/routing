import React from "react";
const Productdetails=(props)=>
{
    return(
        <div className="container">
            <div className="row">
    <h1>ProductDetails:{props.match.params.id}</h1>
            </div>

        </div>
    )

}

export default  Productdetails;