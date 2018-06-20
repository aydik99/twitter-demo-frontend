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

class Banner extends Component {
  render() {
    return (
      <div>
        <BannerBackground src={banner} />
      </div>
    );
  }
}

export default Banner;
