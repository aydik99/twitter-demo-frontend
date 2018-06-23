import React, { Component } from "react";
import styled from "styled-components";
import banner from "./banner.png";

const BannerBackground = styled.div`
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: 50% 40%;
  background-image: url(${banner});
`;

const Banner = () => <BannerBackground src={banner} />;

export default Banner;
