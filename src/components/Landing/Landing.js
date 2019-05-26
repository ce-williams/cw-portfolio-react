import React from "react";
import "./Landing.css";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

// import { Spring } from 'react-spring'



const Landing = () => (

  <div>
    <div className="Buttons">
      <h2>
        Curtis Williams - Recent Works
    </h2>


    <Container>
      <Row>

      </Row>
      
      
      <Row>
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

        <Col>
          <CardDeck>
            <Card href="#">
            <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/craigslist-home-page-montreal-canada-december-under-magnifying-glass-american-classified-advertisements-website-jobs-135143884.jpg" />
            <Card.Body> 
              <Card.Title>ClScr</Card.Title>
              <Card.Text>
              A simple python script used to output a specific query from craigslist. This project leverages the BS4 and Selenium libraries.
              </Card.Text>
            </Card.Body>
            <Card.Link href="https://github.com/ce-williams/clscr" target="_blank">Project Link</Card.Link>
            <Card.Footer>
              <small className="text-muted">Languages: Python</small>
            </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
        
        <Col>
          <CardDeck>
            <Card href="#">
            <Card.Img variant="top" src="https://miro.medium.com/max/1318/0*eSQte3e-rJeH7bu8.jpg" />
            <Card.Body> 
              <Card.Title>Pyxl</Card.Title>
              <Card.Text>
              Deviation of csv automation, but leveraging the openpyxl library for more robust workbooks in Excel.
              </Card.Text>
            </Card.Body>
            <Card.Link href="https://github.com/ce-williams/pyxl" target="_blank">Project Link</Card.Link>
            <Card.Footer>
              <small className="text-muted">Languages: Python</small>
            </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>

      <Row>
        <Col>
            <p>-</p>
        </Col>
      </Row>
      
      <Row>
      <Col>
          <p>-</p>
        </Col>
      <Col>
          <CardDeck>
            <Card href="#">
            <Card.Img variant="top" src="https://s3.amazonaws.com/com.twilio.prod.twilio-docs/images/Screen-Shot-2018-03-02-at-10.21.52-AM.width-808.png" />
            <Card.Body> 
              <Card.Title>Emlscr</Card.Title>
              <Card.Text>
              A boilerplate python script used for email automation by leveraging the smtplib library and the Gmail API.
              </Card.Text>
            </Card.Body>
            <Card.Link href="https://github.com/ce-williams/emlscr" target="_blank">Project Link</Card.Link>
            <Card.Footer>
              <small className="text-muted">Languages: Python</small>
            </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
        <Col>
          <p>-</p>
        </Col>
      </Row>


      

    </Container>


    </div>
  </div>
);

export default Landing;


