import React, { Component, Fragment } from "react";
import Header from "../Header";
import Banner from "../Banner";
import UserMenu from "../UserMenu";
import MainContent from "../MainContent";

class Main extends Component {
    render() {
      return (
        <Fragment>
           <Header />
          <Banner />
          <UserMenu />
          <MainContent />
          </Fragment>
      );
    }
  }
  
  export default Main;
  