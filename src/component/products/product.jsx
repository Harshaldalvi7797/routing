import React,{Component} from "react";
import {Link} from "react-router-dom";

class Product extends Component
{
    constructor()
    {
        super();
        this.state={
            products:[
                {
                    id:1,
                    name:"product1"
                },
                {
                    id:2,
                    name:"product2"
                },
                {
                    id:3,
                    name:"product3"
                },

            ]

        }

    }
    render()
    {
        return(
            <div className="container">
                <div className="row">
                   <div className="col-md-12">
                   <h1>Product section</h1>
                   <ul>
                       {
                           this.state.products.map(data=>(
                               <li key={data.id}>
                                   <Link to={`./productdetails/${data.id}`}>{data.name}</Link>
                                   
                               </li>


                           ))
                       }
                   </ul>
                   </div>
                </div>
            </div>

        )
    }

}
export default Product;
