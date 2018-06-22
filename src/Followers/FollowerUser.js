import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const FollowerUserImg = styled.img`
  margin-right: 7px;
`

const followerUserSvg = $img =>
  `${process.env.PUBLIC_URL}/images/users/` + $img + `.svg`

function FollowerUser (props) {
  return (
    <NavLink to={props.to}>
      <FollowerUserImg src={followerUserSvg(props.img)} />{' '}
    </NavLink>
  )
}

export default FollowerUser
