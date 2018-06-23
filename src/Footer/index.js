import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterBlock = styled.div`
  margin: 20px 0 0 -50px;
  width: 300px;
`;

const FooterBlockItem = styled(NavLink)`
  text-decoration: none;
  color: #657786;
  margin: 2px;
  padding: 5px 0;
  float: left;
`;

const Footer = () => (
  <FooterBlock>
    <FooterBlockItem to="#">@2018</FooterBlockItem>
    <FooterBlockItem to="#">Twitter</FooterBlockItem>
    <FooterBlockItem to="#">About</FooterBlockItem>
    <FooterBlockItem to="#">Help</FooterBlockItem>
    <FooterBlockItem to="#">Center</FooterBlockItem>
    <FooterBlockItem to="#">Terms</FooterBlockItem>
    <FooterBlockItem to="#">Cookies</FooterBlockItem>
    <FooterBlockItem to="#">Ads Info</FooterBlockItem>
  </FooterBlock>
);

export default Footer;
