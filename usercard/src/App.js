import React from 'react';
import './App.css';
import UserForm from './components/userForm';
import Card from './components/card';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: {
        login: ""
      }
    }
  }

  handleUserInput=(username)=>{
    axios.get(`https://api.github.com/users/${username}`)
      .then(res=>{
        this.setState({user:res.data})
      })
      .catch(drama=>{console.log(drama)})
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Github User Display</h1>
          <h2>A prettier way to display your Github Info</h2>
        </header>
        <UserForm handleUserInput={this.handleUserInput}/>
        {this.state.user.login ? <Card user={this.state.user}/> : <p>Choose a user</p>}
      </div>
    );
  }
}

export default App;
