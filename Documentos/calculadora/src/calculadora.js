import React from 'react';
import { useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './calculadora.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculadora() {

  const [txtNumeros, setTxtNumeros] = useState('0');

  function adicionarNumero(numero) {
    setTxtNumeros(txtNumeros + numero);
  }

  function definirOperacao(op) {
    setTxtNumeros(op);
  }

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
              className="text-right"
              readOnly="readonly"
              value={txtNumeros} />
          </Col>

        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('7')}>7</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('8')}>8</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('9')}>9</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={() => definirOperacao('/')}>/</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('4')}>4</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('5')}>5</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('6')}>6</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={() => definirOperacao('*')}>*</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('1')}>1</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('2')}>2</Button>
          </Col>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('3')}>3</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={() => definirOperacao('-')}>-</Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light"
            onClick={() => adicionarNumero('0')}>0</Button>
          </Col>
          <Col>
            <Button variant="light">.</Button>
          </Col>
          <Col>
            <Button variant="success">=</Button>
          </Col>
          <Col>
            <Button variant="warning"
            onClick={() => definirOperacao('+')}>+</Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Calculadora;
