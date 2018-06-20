import React, { Component } from "react";
import styled from "styled-components";
import pinned from "./icons/pinned.svg";
import avatar from "./avatar.png";
import comments from "./icons/comments.svg";
import envelope from "./icons/envelope.svg";
import retweet from "./icons/retweet.svg";
import loves from "./icons/loves.svg";
import { NavLink } from "react-router-dom";

const ColAvatar = styled.div`
  width: 100px;
  height: 100%;
  float: left;
`;

const TweetAvatar = styled.img`
  height: 40px;
  width: 40px;
  position: relative;
  top: 15px;
  left: 20px;
`;

const PostItem = styled.div`
  width: 420px;
  height: 100%;
  float: left;
  margin: -20px 0 0 10px;
  padding: 0 0 10px 0;
`;

const TweetPinned = styled.img`
  position: relative;
  bottom: 30px;
  left: 90px;
`;

const PostDetails = styled.div`
  color: #707e88;
`;

const PostDetailsPinned = styled.p`
  color: #707e88;
`;

const PostDetailsName = styled.span`
  font-weight: bold;
  line-height: 30px;
  color: #000;
`;

const PostDetailsDesc = styled.p`
  font-style: Light;
  font-size: 20px;
  line-height: 30px;
  color: #000;
`;

const PostDetailsAutor = styled.p`
  margin: 5px 0 0 0;
`;

const PostAction = styled.div`
  width: 100%;
  height: 20px;
  clear: both;
  margin: 10px 0 0 0;
`;

const PostLink = styled(NavLink)`
  text-decoration: none;
  color: #667580;
  margin: 0 35px 0 0;
`;

const PostImg = styled.img`
  position: relative;
  top: 3px;
  margin: 0 5px 0 0;
`;

const Tweet = styled.div`
  border-top: 1px solid #e1e8ed;
  padding: 20px 0 0 0;
  clear: both;
`;

class TweetItem extends Component {
  render() {
    return (
      <Tweet>
        <ColAvatar>
          {this.props.pinned == 1 ? <TweetPinned src={pinned} /> : null}
          <TweetAvatar src={avatar} />
        </ColAvatar>
        <PostItem>
          <PostDetails>
            {this.props.pinned == 1 ? (
              <PostDetailsPinned>Pinned tweet</PostDetailsPinned>
            ) : null}
            <PostDetailsAutor>
              <PostDetailsName>{this.props.name}</PostDetailsName>{" "}
              {this.props.data}
            </PostDetailsAutor>
            <PostDetailsDesc>{this.props.text}</PostDetailsDesc>
          </PostDetails>
          <PostAction>
            <PostLink to="#">
              <PostImg src={comments} />
              {this.props.comments}
            </PostLink>
            <PostLink to="#">
              <PostImg src={retweet} />
              {this.props.retweet}
            </PostLink>
            <PostLink to="#">
              <PostImg src={loves} />
              {this.props.loves}
            </PostLink>
            <PostLink to="#">
              <PostImg src={envelope} />
            </PostLink>
          </PostAction>
        </PostItem>
      </Tweet>
    );
  }
}

export default TweetItem;
