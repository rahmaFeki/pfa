import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './layout/NavBar.js';
import Footer from './layout/Footer.js';
import ListDomaineComponent from './components/ListeDomaines.js';
import ListSpecialiteComponent from './components/ListSpecialites.js';
import CreateDomaine from './components/CreateDomaine.js';
import LeftSideBar from './layout/SideBar';
function App() {
  return (
  <div>
    <div className="page-loader-wrapper" style={{display: "none;"}}>
    <div className="loader">
    </div>
</div>
<Router>
    <div   id="main_content">

    <NavBar />
    <LeftSideBar />
    <Switch> 
    <Route path = "/"  exact component = {ListDomaineComponent}></Route>
                        
                          <Route path = "/domaines"  component = {ListDomaineComponent}></Route>
                          <Route path = "/add-domaine" component = {CreateDomaine}></Route>
                          <Route path = "/specialites" component = {ListSpecialiteComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
    <Footer />
   
    </div>
    </Router>
    </div>
  );
}

export default App;
