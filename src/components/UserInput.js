import React, { Component } from 'react';

class UserInput extends Component {

  state={
    username:"",
    hometown:""
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.store.dispatch({
      type:"ADD_USER",
      user:{
        hometown: this.state.hometown,
        username: this.state.username
      }
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username"/>
          <label>Hometown</label>
          <input
            type="text"
            name="hometown"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="hometown"/>
          <input type="submit"/>

        </form>
      </div>
    );
  }
};

export default UserInput;
