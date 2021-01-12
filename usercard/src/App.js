import React from 'react';
import './App.css';
import UserForm from './components/userForm';
import Card from './components/card';
import Followers from './components/followers';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      user: {
        login: "",
      },
      followers: []
    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  handleUserInput=(username)=>{
    axios.get(`https://api.github.com/users/${username}`)
      .then(res=>{
        console.log(res.data)
        this.setState({user: res.data})

        axios.get(this.state.user.followers_url)
        .then(res=>{
          this.setState({followers: res.data})
        })
        .catch(drama=>{console.log(drama)})
      })
      .catch(drama=>{console.log(drama)})
  }

  handleHidden=(e)=>{
    if(e.target.value==="followers"){
      document.querySelector('.followers').classList.toggle('hidden')
    }
    else if(e.target.value==="grid"){
      //document.querySelector('.grid').classList.toggle('hidden');
    }
  }
  render() {
    console.log("app rerender")
    return (
      <div className="App">
        <header>
          <h1>Github User Display</h1>
          <h2>A prettier way to display your Github Info</h2>
        </header>
        <UserForm handleUserInput={this.handleUserInput}/>
        {this.state.user.login ? <Card handleHidden={this.handleHidden} user={this.state.user}/> : <p>Choose a user</p>}
        <Followers followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
