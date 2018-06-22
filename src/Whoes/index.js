import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const WhoesBlock = styled.div`
  background-color: #fff;
  width: 320px;
  margin: 5px 0 0 -50px;
`

const WhoesBlockHead = styled.div`
  padding: 5px 10px;
`

const WhoesBlockTitile = styled.p`
  font-weight: bold;
`

const WhoesBlockLink = styled(NavLink)``

const Whoes = () => (
  <WhoesBlock>
    <WhoesBlockHead>
      <WhoesBlockTitile>Who to follow</WhoesBlockTitile>
      <WhoesBlockLink to="#">Refresh</WhoesBlockLink>
    </WhoesBlockHead>
  </WhoesBlock>
)

export default Whoes
