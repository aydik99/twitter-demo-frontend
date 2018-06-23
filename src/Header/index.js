import React from "react";
import styled from "styled-components";
import home from "./icons/home.svg";
import moments from "./icons/moments.svg";
import notifications from "./icons/notifications.svg";
import messages from "./icons/messages.svg";
import search from "./icons/search.svg";
import twitter from "./icons/twitter.svg";
import { NavLink } from "react-router-dom";

const avatar = `${process.env.PUBLIC_URL}/images/users/avatar.png`;

const Wrap = styled.header`
  background-color: #fff;
  width: 100%;
`;

const NavBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  float: right;
  margin: -5px -40px 0 0;
`;

const NavIcon = styled.img`
  position: relative;
  right: -5px;
  top: 5px;
`;

const NavLinkMenu = styled(NavLink)`
  font-weight: Bold;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.01px;
  color: #667580;
  text-decoration: none;
  margin: 0 7px;
  position: relative;
  top: 2px;
`;

const TweetButton = styled.button`
  font-size: 14px;
  letter-spacing: 0.01px;
  color: #ffffff;
  background: #1da1f2;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 7px 0;
  padding: 8px 16px;
  &:hover {
    color: #1da1f2;
    background-color: #fff;
    border: 1px solid #1da1f2;
    padding: 7px 16px;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  color: #667580;
`;

const TwitterLogo = styled.img`
  display: block;
  margin: 7px auto 0;
`;

const SearchBlock = styled.div`
  background-color: #f5f8fa;
  width: 220px;
  height: 32px;
  border-radius: 100px;
  display: flex;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  width: 140px;
  margin: 5px 0 0 10px;
  background-color: #f5f8fa;
  border: none;
`;

const SearchIcon = styled.img`
  position: relative;
  top: 3px;
  left: 20px;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 26.24px;
  height: 26.24px;
  border-radius: 100px;
  position: relative;
  top: 8px;
`;

const Header = () => (
  <Wrap>
    <div className="row">
      <div className="col-4">
        <Navigation>
          <NavBlock>
            <NavIcon src={home} />
            <NavLinkMenu to="#">Home</NavLinkMenu>
          </NavBlock>

          <NavBlock>
            <NavIcon src={moments} />
            <NavLinkMenu to="#">Moments</NavLinkMenu>
          </NavBlock>

          <NavBlock>
            <NavIcon src={notifications} />
            <NavLinkMenu to="#">Notifications</NavLinkMenu>
          </NavBlock>

          <NavBlock>
            <NavIcon src={messages} />
            <NavLinkMenu to="#">Messages</NavLinkMenu>
          </NavBlock>
        </Navigation>
      </div>

      <div className="col-4">
        <Link to="#">
          <TwitterLogo src={twitter} />
        </Link>
      </div>

      <div className="col-4">
        <SearchBlock>
          <SearchInput type="text" name="search" placeholder="Search Twitter" />
          <SearchIcon src={search} />
        </SearchBlock>

        <div>
          <a href="#">
            <TwitterLogo />
          </a>
        </div>
        <Avatar src={avatar} />
        <div>
          <TweetButton>Tweet</TweetButton>
        </div>
      </div>
    </div>
  </Wrap>
);

export default Header;
