import React, { Component } from "react";

class AddContact extends Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
