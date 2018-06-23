import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import TrendItem from "./TrendItem.js";

const TrendBlock = styled.div`
  background-color: #fff;
  width: 320px;
  min-height: 200px;
  margin: 25px 0 0 -50px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const TrendBlockHead = styled.div`
  padding: 20px 10px 0 20px;
`;

const TrendBlockTitile = styled.span`
  font-weight: bold;
  float: left;
  font-size: 18px;
`;

const TrendBlockLinks = styled.div`
  float: left;
`;

const TrendBlockLink = styled(NavLink)`
  margin: 0 7px;
  text-decoration: none;
  color: #39adf4;
  font-size: 14px;
`;

const TrendBlockBody = styled.div`
  margin: 30px 0 0 0;
`;

const TrendArray = [
  {
    to: "#",
    desc: "AppleInsider",
    name: "@appleinsider"
  },
  {
    to: "#",
    desc: "AppleInsider",
    name: "@appleinsider"
  },
  {
    to: "#",
    desc: "AppleInsider",
    name: "@appleinsider"
  }
];

const Trends = () => (
  <TrendBlock>
    <TrendBlockHead>
      <TrendBlockTitile>United Kingdom Trends</TrendBlockTitile>
      <TrendBlockLinks>
        <TrendBlockLink to="#">Change</TrendBlockLink>
      </TrendBlockLinks>
      <TrendBlockBody>
        {TrendArray.map((user, idx) => {
          return (
            <TrendItem
              key={idx}
              to={user.to}
              name={user.name}
              desc={user.desc}
            />
          );
        })}
      </TrendBlockBody>
    </TrendBlockHead>
  </TrendBlock>
);

export default Trends;
