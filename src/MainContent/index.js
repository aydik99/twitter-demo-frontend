import React, { Component } from "react";
import UserInfo from "../UserInfo";
import Post from "../ListPosts";
import styled from "styled-components";

const Content = styled.main`
  margin: 0 0 30px 0;
`;

class MainContent extends Component {
  render() {
    return (
      <div>
        <Content>
          <div className="row">
            <div className="col-3">
              <UserInfo/>
            </div>
            <div className="col-6">
              <Post />
            </div>
          </div>
        </Content>
      </div>
    );
  }
}

export default MainContent;
