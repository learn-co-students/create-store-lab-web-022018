import React, { Component } from 'react';

class UserInput extends Component {
  state={
    username: '',
    hometown: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      payload: this.state
    })
  }

  render() {
    // console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="username" onChange={this.handleChange}/>
          <input name="hometown" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
