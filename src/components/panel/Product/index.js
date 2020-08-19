import React, { Component } from "react";
import { Container, ProductIcon, PurchaseIcon, InfoIcon } from "./styles";
import Logo from "../../../assets/logo.svg";
import { Button, Row, Col } from 'react-bootstrap'

class Product extends Component {


  render() {
    return (
      <Container>

            <Row >
              <Col>
              <h1><ProductIcon />nome do produto</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis tellus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada placerat purus</p>
              </Col>
            </Row>
            <Row>
              <Col className="buttonset">
                <Button variant="primary">
                  <PurchaseIcon />
                </Button>
                <Button variant="secondary">
                  <InfoIcon />
                </Button>
              </Col>
            </Row>
      </Container>
    );
  }
}

export default Product;