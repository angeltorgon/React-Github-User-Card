import React from 'react';
import axios from 'axios';
import './App.css';

import { Card } from '@material-ui/core'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/angel-torres')
    .then((res) => {
      this.setState({
        user: res.data
      }) 
    }).catch(error => {
      console.log(error)  
    })

  }

  render() {
    return (
      <Card className="App">
        <img src={this.state.user.avatar_url} />
        <h1>{this.state.user.login}</h1>
        <p>{this.state.user.bio}</p>
        <p>Followers: {this.state.user.followers}</p>
        <p>Following: {this.state.user.following}</p>
      </Card>
    );
  }
}

export default App;
