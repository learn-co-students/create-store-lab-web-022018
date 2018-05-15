import React, { Component } from 'react';

class UserInput extends Component {

	state = {
		username: '',
		hometown: ''
	}

	submitForm = (e) => {
		e.preventDefault()
		this.props.store.dispatch({type:'ADD_USER', user:this.state})
	}

	changeUsername = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	changeHometown = (e) => {
		this.setState({
			hometown: e.target.value
		})
	}

	render() {
		return(
		  <div>
		    <form onSubmit={this.submitForm}>
		    	Username: <input type='text' name='username' onChange={this.changeUsername}/>
		    	Hometown: <input type='text' name='hometown' onChange={this.changeHometown}/>
		    	<input type='submit'/>
		    </form>
		  </div>
		);
	}
};

export default UserInput;
