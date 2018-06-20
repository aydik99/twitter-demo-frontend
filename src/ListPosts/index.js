import React, { Component } from "react";
import styled from "styled-components";
import TweetItem from "../Tweet";
import { NavLink } from "react-router-dom";

const MenuTweets = styled.nav`
  padding: 20px 0;
`;

const MenuTweetsLink = styled(NavLink)`
  color: #1da1f2;
  text-decoration: none;
  font-weight: Bold;
  font-size: 18px;
  margin: 0 10px;
`;

const posts = [
  {
    name: "Every Interact",
    pinned: "1",
    data: "2 Mar 2015",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    comments: "1",
    retweet: "17",
    loves: "22"
  },
  {
    name: "Every Interact",
    pinned: "0",
    data: "2 Mar 2015",
    text:
      "Variable web fonts are coming, and will open a world of opportunities for weight use online",
    comments: "1",
    retweet: "17",
    loves: "22"
  }
];

class ListPosts extends Component {
  render() {
    return (
      <div>
        <MenuTweets>
          <MenuTweetsLink to="#">Tweets</MenuTweetsLink>
          <MenuTweetsLink to="#">Tweets&replies</MenuTweetsLink>
          <MenuTweetsLink to="#">Media</MenuTweetsLink>
        </MenuTweets>
        {posts.map((item, idx) => {
          return (
            <TweetItem
              key={idx}
              pinned={item.pinned}
              name={item.name}
              data={item.data}
              text={item.text}
              comments={item.comments}
              retweet={item.retweet}
              loves={item.loves}
            />
          );
        })}
      </div>
    );
  }
}

export default ListPosts;
