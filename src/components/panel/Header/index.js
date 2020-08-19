import React, { Component } from "react";
import { Container, TopLogo, SearchInput, MessageIcon } from "./styles";
import Logo from "../../../assets/logo.svg";
class Header extends Component {


  render() {
    return (
      <Container>
       <TopLogo src={Logo} alt="Marrs logo" />
       <SearchInput placeholder="Buscar"/>
       <MessageIcon />
      </Container>
    );
  }
}

export default Header;