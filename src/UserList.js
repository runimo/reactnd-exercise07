import React, { Component } from 'react';
import CreateUser from './CreateUser.js'
import UserCard from './UserCard.js';

class UserList extends Component {
  state = {
    users: [
      {
        id: '1',
        userName: 'frozenTear',
        firstName: 'Sebastian',
        lastName: 'Parker',
        gamesPlayed: 7,
        topFiveGames: ['The Legend of Zelda: Breath of the Wild', 'Super Mario Galaxy', 'The Witcher 3: Wild Hunt', 'The Last of Us', 'Portal']
      },
      {
        id: '2',
        userName: 'bananaCat',
        firstName: 'Maria',
        lastName: 'Gonzalez',
        gamesPlayed: 104
      },
      {
        id: '3',
        userName: 'gobermouch',
        firstName: 'Mark',
        lastName: 'Evans',
        gamesPlayed: 3
      },
      {
        id: '4',
        userName: 'mumpsimus',
        firstName: 'Lucinda',
        lastName: 'Miller',
        gamesPlayed: 15
      },
      {
        id: '5',
        userName: 'rakefire',
        firstName: 'Stefany',
        lastName: 'Rivera',
        gamesPlayed: 2
      },
      {
        id: '6',
        userName: 'pannikin',
        firstName: 'Jason',
        lastName: 'Brooks',
        gamesPlayed: 38
      },
      {
        id: '7',
        userName: 'gillie',
        firstName: 'Julie',
        lastName: 'Henderson',
        gamesPlayed: 17
      },
      {
        id: '8',
        userName: 'stampCrab',
        firstName: 'Paul',
        lastName: 'Jenkins',
        gamesPlayed: 43
      },
      {
        id: '9',
        userName: 'tardyGrovel',
        firstName: 'Miguel',
        lastName: 'Reyes',
        gamesPlayed: 127
      },
      {
        id: '10',
        userName: 'noiselessPumpkin',
        firstName: 'Richard',
        lastName: 'Daniel',
        gamesPlayed: 8
      },
    ]
  };

  render() {
    const { users } = this.state;

    return (
      <div className="userlist__container">
        <CreateUser />
        <ol className="userlist">
          {users.map((user) => (<UserCard key={user.id} user={user} />))}
        </ol>
	  </div>
    )
  }
}


export default UserList