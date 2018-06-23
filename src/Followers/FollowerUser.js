import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FollowerUserImg = styled.img`
  margin-right: 7px;
`;

const GetfollowerUserImg = img =>
  `${process.env.PUBLIC_URL}/images/users/` + img;

function FollowerUser(props) {
  return (
    <NavLink to="#">
      <FollowerUserImg src={GetfollowerUserImg(props.img)} />{" "}
    </NavLink>
  );
}

export default FollowerUser;
