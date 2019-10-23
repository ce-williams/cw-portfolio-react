import React from "react";
import "./Projectcard.css";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import { Spring } from 'react-spring'

const Projectcard = props => (
//   <div className="card">
//   <div className="img-container">
//     <img alt={props.name} src={props.image} />
//   </div>
//   <div className="content">
//     <ul>
//       <li>
//         <strong>Name:</strong> {props.name}
//       </li>
//       <li>
//         <strong>Occupation:</strong> {props.occupation}
//       </li>
//       <li>
//         <strong>Location:</strong> {props.location}
//       </li>
//     </ul>
//   </div>
//   <span onClick={() => props.removeFriend(props.id)} className="remove">
//     𝘅
//   </span>
// </div>

  // <Row>
  //   <Col>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                {props.info}
              </Card.Text>
            </Card.Body>
            <Card.Link href={props.link} target="_blank">Project Link</Card.Link>
            <Card.Footer>
              <small className="text-muted">GitHub Repository Link Above</small>
            </Card.Footer>
          </Card>
        </CardDeck>
  //   </Col>
  // </Row>
);


export default Projectcard;