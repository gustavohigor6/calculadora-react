import React from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculadora() {
  return (
    <div class="jumbotron" style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px'
    }}>
      <Container>
        <Row>

          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>

          <Col xs="9">
            <Form.Control type="text"
              name="txtNumeros"
              class="text-right"
              readOnly="readonly" />
          </Col>

        </Row>

        <Row>
          <Col>
            <Button variant="light">7</Button>
          </Col>
          <Col>
            <Button variant="light">8</Button>
          </Col>
          <Col>
            <Button variant="light">9</Button>
          </Col>
          <Col>
            <Button variant="warning">/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light">4</Button>
          </Col>
          <Col>
            <Button variant="light">5</Button>
          </Col>
          <Col>
            <Button variant="light">6</Button>
          </Col>
          <Col>
            <Button variant="warning">*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light">1</Button>
          </Col>
          <Col>
            <Button variant="light">2</Button>
          </Col>
          <Col>
            <Button variant="light">3</Button>
          </Col>
          <Col>
            <Button variant="warning">-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light">0</Button>
          </Col>
          <Col>
            <Button variant="light">.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
          </Col>
          <Col>
            <Button variant="warning">+</Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Calculadora;
