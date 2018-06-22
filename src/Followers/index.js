import React, { Component } from 'react'
import styled from 'styled-components'
import follower from './follower.svg'
import FollowerUser from './FollowerUser.js'

const FollowersBlock = styled.div`
  margin-top: 30px;
`

const FollowerImg = styled.img`
  position: relative;
  top: 2px;
  margin-right: 8px;
`

const FollowersBlockHeader = styled.div`
  font-style: Regular;
  font-size: 16px;
  line-height: 16px;
  color: #1da1f2;
`

const FollowersBlockBody = styled.div`
  margin: 8px 0 0 0;
`

const followersArray = [
  {
    img: '1',
    to: '#'
  },
  {
    img: '2',
    to: '#'
  },
  {
    img: '3',
    to: '#'
  },
  {
    img: '4',
    to: '#'
  },
  {
    img: '5',
    to: '#'
  },
  {
    img: '6',
    to: '#'
  }
]

const Followers = () => (
  <FollowersBlock>
    <FollowersBlockHeader>
      <FollowerImg src={follower} /> {followersArray.length} followers you know
    </FollowersBlockHeader>
    <FollowersBlockBody>
      {followersArray.map((user, idx) => {
        return <FollowerUser key={idx} to={user.to} img={user.img} />
      })}
    </FollowersBlockBody>
  </FollowersBlock>
)

export default Followers
