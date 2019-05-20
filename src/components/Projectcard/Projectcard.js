import React, { Component } from "react";
import "./Landing.css";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Spring } from 'react-spring'

export class Projectcard extends Component {
    return(
        <Col>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://business-school.exeter.ac.uk/media/universityofexeter/businessschool/styleassets/images/about/dept_finance.jpg" />
              <Card.Body>
                <Card.Title>FinScr</Card.Title>
                <Card.Text>
                Working version of a python script for monitoring a specified set of indicators for public companies. Libraries from previous projects were leveraged for this script.
                </Card.Text>
              </Card.Body>
              <Card.Link href="https://github.com/ce-williams/finscr" target="_blank">Project Link</Card.Link>
              <Card.Footer>
                <small className="text-muted">Languages: Python</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
    )
}

export default Projectcard;