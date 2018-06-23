import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const UserBlockItem = styled.div`
  height: 75px;
  cursor: pointer;
  padding: 0 5px;
  border-bottom: ${props => (props.active ? "4px solid #1da1f2" : "none")};
  &:hover {
      border-bottom: 4px solid #1da1f2;
  }

  &.active {
    border-bottom: 4px solid #1da1f2;
    color: #1da1f2;
  }
  }
`;

const UserBlockItemName = styled.p`
font-weight: Bold;
font-size: 15px;
letter-spacing: 0.01px;
color: #707e88;
position: relative;
top: 9px;
}
`;

const LinkUserBlockItem = styled.a`
  text-decoration: none;
`;

const UserBlockItemCount = styled.p`
position: relative;
  top: -5px;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 0.01px;
  color: #707e88;
  text-align: center;
 ${UserBlockItem}:hover &,
  ${UserBlockItem}.active & {
    color: #1da1f2;
  }
  
}`;

function UserMenuItem(props) {
  return (
    <NavLink to={props.src}>
      <UserBlockItem className={props.active == 1 ? "active" : null}>
        <UserBlockItemName>{props.name}</UserBlockItemName>
        <UserBlockItemCount>{props.count}</UserBlockItemCount>
      </UserBlockItem>
    </NavLink>
  );
}

export default UserMenuItem;
