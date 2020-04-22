import React, { Component } from 'react';

class UserCard extends Component {
  
  render() {
    const { user } = this.props
    return (
      <li className="user__card">
        <p>{user.userName}</p>
        <p>{user.firstName} {user.lastName}</p>
        <p>{user.gamesPlayed}</p>
        <p>{user.topFiveGames}</p>
      </li>
    )
  }

}


export default UserCard