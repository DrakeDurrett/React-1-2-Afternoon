import React, { Component } from 'react';
import Header from './Components/Header';
import IdCard from './Components/IdCard';
import NavBar from './Components/NavBar';
import data from './Data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
          userInfo: data,
          currentUser: 0
    }

    this.nextUser = this.nextUser.bind(this);
    this.previousUser = this.previousUser.bind(this);
  }

  nextUser(event) {
    const currentUser = this.state.currentUser;
    if(currentUser === this.state.userInfo.length - 1) {
      event.preventDefault()
    } else (
    this.setState ({
      currentUser: currentUser + 1
    })
    )
  }

  previousUser(event){
    const currentUser = this.state.currentUser;
    if(currentUser === 0) {
      event.preventDefault();
    } else (
    this.setState({
      currentUser: currentUser - 1
    }))
  }

  render() {
      const { currentUser, userInfo } = this.state;
      const userInfoMap = this.state.userInfo.map( (user, index) => {
          if(index === currentUser) {
            return <IdCard key={user.id} user={user}/>
          }
      })
    return (
        <div className="App">
          <Header />
          {userInfoMap}
          <NavBar value={userInfo.id} nextUser={this.nextUser} previousUser={this.previousUser}/>
        </div>
    )
}
}

export default App;


