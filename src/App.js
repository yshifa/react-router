import React from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import LoginForm from "./LoginForm";

class App extends React.Component {
    render() {
        return (
            <Router>
           <div>
               <ul>
                   <li>
                       <Link to="/">Home</Link>
                   </li>
                   
                   <li>
                       <Link to="/loginform">LoginForm</Link>
                   </li>
                   <li>
                       <Link to="/about">About</Link>
                   </li>
                   <li>
                       <Link to="/contact">Contact</Link>
                   </li>
               </ul>
               <Route exact path={"/"} component={Home}  />
               <Route exact path={"/loginform"} component={LoginForm} />
               <Route exact path={"/about"} component={About}  />
               <Route exact path={"/contact"} component={Contact}  />
           </div> 
           </Router>
        );
    }
}


  

export default App;
