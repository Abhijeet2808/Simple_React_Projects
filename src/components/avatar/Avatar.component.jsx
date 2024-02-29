import React, { Component } from "react";

import "./Avatar.styles.css";

class Avatar extends Component {
  render() {
    const { username, age, email, birthDate } = this.props.userInformation;
    return (
      <div id="avatar-container">
        <h1>Use Info</h1>
        <div>
          <p>Name:{username}</p>
          <p>Age:{age}</p>
          <p>Email:{email}</p>
          <p>Birth Date:{birthDate}</p>
        </div>
      </div>
    );
  }
}
export default Avatar;
