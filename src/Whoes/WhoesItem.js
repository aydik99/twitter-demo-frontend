import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import close from "./close.svg";
const confirmation = `${process.env.PUBLIC_URL}/images/tick.png`;

const NavLink = styled(Link)`
  text-decoration: none;
`;
const WhoesImgClose = styled.img`
  float: right;
`;
confirmation;

const WhoesImgConfirmation = styled.img`
  position: relative;
  top: 3px;
  left: 2px;
`;

const WhoesBlockItemInfo = styled.div`
  position: relative;
  left: 10px;
  top: 10px;
`;
const WhoesBlockItemName = styled.span`
  font-weight: bold;
`;

const WhoesBlockItemLogin = styled.span`
  color: #b2bbc3;
  margin: 0 0 0 5px;
`;

const Follow = styled.button`
  color: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  padding: 7px 25px;
  background-color: #fff;
  cursor: pointer;
  font-weight: bold;
  margin: 10px 0 0 0;
  &:hover {
    background-color: #1da1f2;
    border: 1px solid #fff;
    color: #fff;
  }
`;

const WhoesBlockItem = styled.div`
  width: 300px;
  min-height: 50px;

  padding: 10px 0 30px 0;
  border-bottom: 1px solid #ecf1f3;
  margin: 10px 0;
`;

const WhoesBlockItemImg = styled.img`
  float: left;
`;

function WhoesItem(props) {
  return (
    <WhoesBlockItem to={props.to}>
      <WhoesImgClose src={close} />
      <NavLink to={props.to}>
        <WhoesBlockItemImg
          src={`${process.env.PUBLIC_URL}/images/users/` + props.img}
        />
        <WhoesBlockItemInfo>
          <WhoesBlockItemName>{props.name}</WhoesBlockItemName>
          {props.confirm == "1" ? (
            <WhoesImgConfirmation src={confirmation} />
          ) : null}
          <WhoesBlockItemLogin>{props.login}</WhoesBlockItemLogin>
          <br />
          <Follow>Follow</Follow>
        </WhoesBlockItemInfo>
      </NavLink>
    </WhoesBlockItem>
  );
}

export default WhoesItem;
