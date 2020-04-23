import React, { Component } from 'react';
import UserCard from './UserCard.js';

class UserList extends Component {
  

  render() {
    const { users } = this.props;

    return (
      <div className="userlist__container">
        <ol className="simple-list">
          {users.sort((a, b) => b.id - a.id).map((user) => (<UserCard key={user.id} user={user} />))}
        </ol>
	  </div>
    )
  }
}


export default UserList