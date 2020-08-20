import React, { Component } from "react";
import { Container, Body } from "./styles";
import Header from "../../components/panel/Header";
import Product from "../../components/panel/Product";
import Template from "../../Template";
import { Row, Col } from "react-bootstrap";

class Dashboard extends Component {
  state = {
    products: [
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ],
  };

  render() {
    return (

      <Container>
        <Template>
        <Body>
          <container>
            <Row>
              <Col xs="12" md="3" className="profile" >Profile</Col>
              <Col xs="12" md="9"  >
                <Row>
                  {this.state.products.map(function (item) {
                    return (
                      <Col xs="12" md="6" >
                        <Product />
                      </Col>
                    )
                  })

                  }
                </Row>
              </Col>
            </Row>

          </container>
        </Body>
        </Template>
        

      </Container>

    );
  }
}

export default Dashboard;