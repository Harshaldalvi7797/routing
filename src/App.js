import React, { Component } from 'react';
import Navigation from "./component/navigation/navigation";
import {Route} from "react-router-dom";
import Home from "./component/Home/home";
import About from "./component/about/about";
import Product from "./component/products/product";


class App extends Component
{
  render()
  {
    return(
      <React.Fragment>
             <Navigation/>
             <div className="container">
               <Route path="/home" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/product"  component={Product}/>
               <Route path="/" exact component={Home}/>
              
             </div>

      </React.Fragment>
    
   
     
    )
  }
}

export default App;
