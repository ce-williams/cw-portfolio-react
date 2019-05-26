// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Card from 'react-bootstrap/Card';
// import CardDeck from 'react-bootstrap/CardDeck';
import "./App.css";
import projects from "./components/projects.json";
import Projectcard from "./components/Projectcard/Projectcard";
import Flex from "./components/Flex";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'



class App extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };


  render() {
    return (
      
      // <Flex>
        <Wrapper>
          <Jumbotron>
        <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
      </Jumbotron>
        {this.state.projects.map(project => (
          <Projectcard
            id={project.id}
            name={project.name}
            // image={project.image}
            link={project.link}
            info={project.info}
          />
        ))}
        </Wrapper>
      // </Flex>
    );
  }
}
// {/* <Projectcard
//   id={project.id}
//   name={project.name}
//   image={project.image}
//   link={project.link}
//   info={project.info}
// /> */}

export default App;
