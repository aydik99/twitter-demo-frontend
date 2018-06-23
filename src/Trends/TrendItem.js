import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TrendBlockItem = styled.div``;

const TrendBlockItemTag = styled(NavLink)`
  text-decoration: none;
  color: #39adf4;
  font-size: 20px;
`;

const TrendBlockItemText = styled.p`
  position: relative;
  bottom: 12px;
  color: #b2bbc3;
  font-size: 14px;
`;

function TrendItem(props) {
  return (
    <TrendBlockItem>
      <TrendBlockItemTag to={props.to}>{props.name}</TrendBlockItemTag>
      <TrendBlockItemText>{props.desc}</TrendBlockItemText>
    </TrendBlockItem>
  );
}

export default TrendItem;
