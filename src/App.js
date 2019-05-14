// import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import React, { Component } from 'react';
import React from "react";

import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Landing} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}


export default App;
