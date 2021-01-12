import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ username: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUserInput(this.state.username);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Search by username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button>Display Info</button>
      </form>
    );
  }
}
export default UserForm;