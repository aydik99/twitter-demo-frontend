import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const PhotoUserImg = styled.img`
  margin-right: 7px;
`

const PhotoUserSvg = $img =>
  `${process.env.PUBLIC_URL}/images/photos/` + $img + `.svg`

function PhotoUser (props) {
  return (
    <NavLink to={props.to}>
      <PhotoUserImg src={PhotoUserSvg(props.img)} />{' '}
    </NavLink>
  )
}

export default PhotoUser
