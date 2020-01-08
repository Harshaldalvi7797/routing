import React, { Component } from 'react';
import Navigation from "./component/navigation/navigation";
import {Route,Switch} from "react-router-dom";
import Home from "./component/Home/home";
import About from "./component/about/about";
import Product from "./component/products/product";
import Productdetails from "./component/product.details/productdetails";


class App extends Component
{
  render()
  {
    return(
      <React.Fragment>
             <Navigation/>
            
             <div className="container">

             <Switch>
             <Route path="/home" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/product"  component={Product}/>
               <Route path="/productdetails/:id" component={Productdetails}/>
               <Route path="/"  exact component={Home} />
             

               
</Switch>
              
              
             </div>

      </React.Fragment>
    
   
     
    )
  }
}

export default App;
