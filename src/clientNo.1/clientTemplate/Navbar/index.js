import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import "./style.css";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor,
} from "./style";

export const Navbar = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    axios.get("/js/navbarData.json").then((res) => {
      setHeaders(res.data.headers);
    });
  }, []);

  const HeaderTitle = headers.map(function (headerItem) {
    return (
      <ListItem key={headerItem.id}>
        <Anchor to={headerItem.path} active={headerItem.active}>
          {headerItem.title}
        </Anchor>
      </ListItem>
    );
  });
  return (
    <NavbarSection>
      {/* <Router> */}
      <Logo>
        <LogoText>Ultra Profile</LogoText>
      </Logo>
      {/* <Input> </Input> */}
      {/* <Label for={Input}></Label> */}
      <UlList>
        {HeaderTitle}
        {/* <ListItem>
          <Anchor to="/">Home</Anchor>
        </ListItem> */}
        {/* <ListItem>
          <Anchor to="/Work">Work</Anchor>
        </ListItem> */}
        {/* <ListItem>
          <Anchor to="/portfolio">Portfolio</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="#">Resume</Anchor>
        </ListItem>
        <ListItem>
          <Anchor href="#">About</Anchor>
        </ListItem>
        <ListItem>
          <Anchor to="/portfolio">Contact</Anchor>
        </ListItem> */}
      </UlList>
    </NavbarSection>
  );
};
