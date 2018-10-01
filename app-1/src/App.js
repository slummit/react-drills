import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor () {
    super();

      this.state = {
        message: "hello"
      }  
  }

forChanges(val){
  this.setState({message: val})
}
  
  render() {
    return (
      <div className = 'App'>
        <input onChange = {event=>this.forChanges(event.target.value)}></input>
          <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App;
