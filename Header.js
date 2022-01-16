import React, { useState } from "react"; //useState helps us manage our app state

import { AlignRightOutlined } from "@ant-design/icons"; //importing ant design icons
//import { MiniSidebar } from "./Sidebar ";
import "./Header.css"; //importing a css styling sheet

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="header">
      <h3 className="head">Region Details</h3>
      <button className="login" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Login' : 'Logout'}
      </button>
      </div>
    );
  }
}


export default Header;