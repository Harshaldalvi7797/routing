import React, { Component } from 'react';
import Navigation from "./component/navigation/navigation";
import {Route,Switch,Redirect } from "react-router-dom";
import Home from "./component/Home/home";
import About from "./component/about/about";
import Product from "./component/products/product";
import Productdetails from "./component/product.details/productdetails";
import Notfound from "./component/not-found/notfound";


class App extends Component
{
  constructor()
  {
    super();
    this.state={

    }
  }
  render()
  {
    return(
      <React.Fragment>
             <Navigation/>
            
             <div className="container">

             <Switch>
             <Route path="/home" render={ (props) => <Home sortby="newest" {...props }/>} />
               <Route path="/about" component={About}/>
               <Route path="/product"  component={Product}/>
               <Route path="/productdetails/:id" component={Productdetails}/>
               <Route path="/"  exact component={Home} />
               <Route path="/notfound" component={Notfound} />
               <Redirect to= "/notfound" />
             

               
</Switch>
              
              
             </div>

      </React.Fragment>
    
   
     
    )
  }
}

export default App;
