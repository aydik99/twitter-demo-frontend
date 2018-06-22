import React, { Component } from 'react'
import styled from 'styled-components'
import UserInfo from '../UserInfo'
import Post from '../ListPosts'
import Followers from '../Followers'
import Photos from '../Photos'
import Whoes from '../Whoes'

const Content = styled.main`
  margin: 0 0 30px 0;
`

class MainContent extends Component {
  render () {
    return (
      <Content>
        <div className="row">
          <div className="col-3">
            <UserInfo />
            <Followers />
            <Photos />
          </div>
          <div className="col-6">
            <Post />
          </div>
          <div className="col-3">
            <Whoes />
          </div>
        </div>
      </Content>
    )
  }
}

export default MainContent
