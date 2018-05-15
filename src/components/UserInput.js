import React, { Component } from 'react';

class UserInput extends Component {
  state={"username": "", "hometown": ""}

  handleChange = (event)=>{
    // console.log(event.target.id);
    this.setState({[event.target.id]: event.target.value}, ()=>{console.log(this.state)})
  }

  handleForm = (event)=>{
    event.preventDefault();
    //send to reducer
    this.props.store.dispatch({type: "ADD_USER", username: this.state.username, hometown: this.state.hometown})
    //clear input
    this.setState({username: "", hometown: ""})
  }

  render() {
    return(
      <div>
        user input
        <form onSubmit={this.handleForm}>
          <label htmlFor="username">username</label>
            <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
          <br/>
          <label htmlFor="hometown">hometown</label>
            <input type="text" id="hometown" value={this.state.hometown} onChange={this.handleChange} />
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
