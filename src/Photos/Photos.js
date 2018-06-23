import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PhotoUserImg = styled.img`
  margin-right: 7px;
`;

const GetPhotoUserImg = $img =>
  `${process.env.PUBLIC_URL}/images/photos/` + $img;

function PhotoUser(props) {
  return (
    <NavLink to="#">
      <PhotoUserImg src={GetPhotoUserImg(props.img)} />{" "}
    </NavLink>
  );
}

export default PhotoUser;
