// import React from 'react';
// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <h1>CW portfolio</h1>
//         <p>CD checkpoint - GH connected</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Landing} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
