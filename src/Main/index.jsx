import React, { Component } from "react";
import Header from "../Header";
import Banner from "../Banner";
import UserMenu from "../UserMenu";
import MainContent from "../MainContent";

class Main extends Component {
    render() {
      return (
        <div>
            <Header />
          <Banner />
          <UserMenu />
          <MainContent />
        </div>
      );
    }
  }
  
  export default Main;
  