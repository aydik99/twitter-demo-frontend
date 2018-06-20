import React, { Component } from "react";
import styled from "styled-components";
import UserMenuItem from "../UserMenuItem";
import more from "./more.png";
import avatar from "./avatar.png";

const Follow = styled.button`
  color: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 100px;
  padding: 7px 25px;
  background-color: #fff;
  cursor: pointer;
  margin: 10px 0 0 250px;
  font-weight: bold;
  &:hover {
    background-color: #1da1f2;
    border: 1px solid #fff;
    color: #fff;
  }
`;

const UserBlock = styled.section`
  margin: -5px 0;
  height: 62px;
  background-color: #fff;
`;

const AvatarBigBlock = styled.div`
  width: 207.5px;
  height: 207.5px;
  border-radius: 100%;
  z-index: 2;
  position: relative;
  top: -130px;
  left: 155px;
  background-color: #fff;
`;

const AvatarBigImage = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin: 30px auto;
  border-radius: 100%;
`;

const UserBlockMenu = styled.div`
  position: relative;
  left: -20px;
  top: -25px;
`;

const ImgMore = styled.img`
margin: 0 0 0 10px;
}`;

const MenuItems = [
  {
    name: "Tweets",
    count: "8,058",
    active: "1",
    src: "/EveryInteract"
  },
   {
    name: "Following",
    count: "721",
    active: "0",
    src: "/"
  },
  {
    name: "Followers",
    count: "1,815",
    active: "0",
    src: "/"
  },
  {
    name: "Likes",
    count: "460",
    active: "0",
    src: "/"
  },
  {
    name: "List",
    count: "2",
    active: "0",
    src: "/"
  },
];

const LinkUserBlockItem = styled.a`
text-decoration: none;
`;


class UserMenu extends Component {
  render() {
    return (
      <div>
        <UserBlock>
          <div className="row">
            <div className="col-4">
              <AvatarBigBlock>
                <AvatarBigImage src={avatar} />
              </AvatarBigBlock>
            </div>
            
            <div className="col-4">
            <UserBlockMenu>
            {MenuItems.map((item, idx) => {
          return (
            <UserMenuItem
               key={idx}
              name={item.name}
              count={item.count}
              active={item.active}
              src={item.src}
            />
          );
        })}
        
          </UserBlockMenu>
            </div>
            <div className="col-4">
              <Follow>Follow</Follow>
              <LinkUserBlockItem href="/">
                <ImgMore src={more} />
              </LinkUserBlockItem>
            </div>
          </div>
        </UserBlock>
      </div>
    );
  }
}

export default UserMenu;
