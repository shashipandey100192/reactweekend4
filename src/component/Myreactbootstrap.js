import Button from 'react-bootstrap/Button';
import React from 'react'
import { Col, Container, Row,Nav } from 'react-bootstrap';


function Myreactbootstrap() {
  return (
    <div>
        <h1>Myreact-bootstrap</h1>
       
        <Button variant="primary">Primary</Button>
    <Container>
        <Row>
            <Col>
            </Col>
        </Row>
    </Container>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

        </div>
  )
}

export default Myreactbootstrap