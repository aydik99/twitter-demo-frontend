import React, { Component } from "react";
import styled from "styled-components";
import photos from "./photos.svg";
import PhotoUser from "./Photos.js";

const PhotosBlock = styled.div`
  margin-top: 10px;
`;

const PhotosImg = styled.img`
  position: relative;
  top: 2px;
  margin-right: 8px;
`;

const PhotosBlockHeader = styled.div`
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  color: #1da1f2;
`;

const PhotosBlockBody = styled.div`
  margin: 8px 0 0 0;
`;

const PhotosArray = [
  {
    img: "1.png"
  },
  {
    img: "2.png"
  },
  {
    img: "3.png"
  },
  {
    img: "4.png"
  },
  {
    img: "5.png"
  },
  {
    img: "6.png"
  }
];

const Photos = () => (
  <PhotosBlock>
    <PhotosBlockHeader>
      <PhotosImg src={photos} /> {PhotosArray.length} photos and videos
    </PhotosBlockHeader>
    <PhotosBlockBody>
      {PhotosArray.map((user, idx) => {
        return <PhotoUser key={idx} img={user.img} />;
      })}
    </PhotosBlockBody>
  </PhotosBlock>
);

export default Photos;
