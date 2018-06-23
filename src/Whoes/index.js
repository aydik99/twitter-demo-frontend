import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import close from "./close.svg";
import people from "./people.svg";
import WhoesItem from "./WhoesItem.js";

const WhoesBlock = styled.div`
  background-color: #fff;
  width: 320px;
  min-height: 200px;
  margin: 5px 0 0 -50px;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

const WhoesBlockHead = styled.div`
  padding: 20px 10px 0 20px;
`;

const WhoesBlockTitile = styled.span`
  font-weight: bold;
  float: left;
  font-size: 18px;
`;

const WhoesBlockLinks = styled.div`
  float: left;
`;

const WhoesBlockLink = styled(NavLink)`
  margin: 0 7px;
  text-decoration: none;
  color: #39adf4;
  font-size: 14px;
`;

const WhoesBlockBody = styled.div`
  margin: 30px 0 0 10px;
`;

const WhoesImgPeople = styled.img``;

const WhoesBlockItemLogin = styled.span`
  color: #b2bbc3;
  margin: 0 0 0 5px;
`;

const WhoesBlockFooter = styled.div`
  width: 100%;
  min-height: 30px;
  margin: 20px 0 0 0;
`;

const WhoesBlockFooterInfo = styled(NavLink)`
  text-decoration: none;
  position: relative;
  bottom: 10px;
  left: 10px;
`;

const WhoesBlockFooterText = styled.span`
  position: relative;
  left: 5px;
  bottom: 2px;
  color: #39adf4;
  font-size: 14px;
`;

const WhoesArray = [
  {
    img: "7.png",
    to: "#",
    name: "AppleInsider",
    login: "@appleinsider",
    confirm: "0"
  },
  {
    img: "8.png",
    to: "#",
    name: "Creode",
    login: "@Creode",
    confirm: "1"
  },
  {
    img: "9.png",
    to: "#",
    name: "Epiphant Search",
    login: "@Epiph...",
    confirm: "0"
  }
];

const Whoes = () => (
  <WhoesBlock>
    <WhoesBlockHead>
      <WhoesBlockTitile>Who to follow</WhoesBlockTitile>
      <WhoesBlockLinks>
        <WhoesBlockLink to="#">Refresh</WhoesBlockLink>
        <WhoesBlockLink to="#">View All</WhoesBlockLink>
      </WhoesBlockLinks>
    </WhoesBlockHead>
    <WhoesBlockBody>
      {WhoesArray.map((user, idx) => {
        return (
          <WhoesItem
            key={idx}
            img={user.img}
            to={user.to}
            name={user.name}
            login={user.login}
            confirm={user.confirm}
          />
        );
      })}
    </WhoesBlockBody>
    <WhoesBlockFooter>
      <WhoesBlockFooterInfo to="#">
        <WhoesImgPeople src={people} />
        <WhoesBlockFooterText>Find people you know</WhoesBlockFooterText>
      </WhoesBlockFooterInfo>
    </WhoesBlockFooter>
  </WhoesBlock>
);

export default Whoes;
