import React, { Component } from "react";
import styled from "styled-components";
import twig from "./tick.png";
import location from "./icons/location.svg";
import joined from "./icons/joined.svg";
import link from "./icons/link.svg";
import { NavLink } from "react-router-dom";

const UserAction = styled.button`
  border: none;
  background-color: #1da1f2;
  color: #fff;
  padding: 15px 30px;
  border-radius: 100px;
  font-weight: Bold;
  font-size: 15px;
  cursor: pointer;
`;

const UserName = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  letter-spacing: 0.02px;
`;

const Confirmation = styled.img`
  position: relative;
  top: 5px;
`;

const UserLogin = styled.p`
  font-style: Regular;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.01px;
  color: #697787;
  margin: -20px 0 0 0;
`;

const UserDesc = styled.p`
  font-style: Regular;
  font-size: 16px;
`;

const UserDetailImg = styled.img`
  margin: 0 2px 0 0;
  position: relative;
  top: 3px;
`;

const UserDetailLink = styled(NavLink);

class UserInfo extends Component {
  render() {
    return (
      <div>
        <UserName>
          Every Interaction <Confirmation src={twig} />
        </UserName>
        <UserLogin>@EveryInteract Follows you</UserLogin>
        <UserDesc>
          UX Design studio focused problem solving creativity. Design to us is
          how can we make things *work* amazing.
        </UserDesc>
        <div className="user_details">
          <p>
            <UserDetailImg src={location} /> London, UK
          </p>
          <p>
            <UserDetailImg src={link} />
            <NavLink to="#">everyinteraction.com</NavLink>
          </p>
          <p>
            <UserDetailImg src={joined} /> Joined May 2008
          </p>
        </div>
        <UserAction> Tweet to</UserAction> <UserAction> Message</UserAction>
      </div>
    );
  }
}

export default UserInfo;
