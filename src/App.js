import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUser from './CreateUser.js';
import UserList from './UserList.js'

class App extends Component {
  
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
        gamesPlayed: 104,
        topFiveGames: ['Tetris', 'Super Mario Odyssey', 'Mega Man 2', 'Doom', 'Mario Kart 7']
      },
      {
        id: '3',
        userName: 'gobermouch',
        firstName: 'Mark',
        lastName: 'Evans',
        gamesPlayed: 3,
        topFiveGames: ['To the Moon', 'Borderlands 2', 'Rise of the Tomb Raider']
      },
      {
        id: '4',
        userName: 'mumpsimus',
        firstName: 'Lucinda',
        lastName: 'Miller',
        gamesPlayed: 15,
        topFiveGames: ['Super Mario Odyssey', 'Secret of Mana', 'Shattered Horizon', 'Overwatch']
      },
      {
        id: '5',
        userName: 'rakefire',
        firstName: 'Stefany',
        lastName: 'Rivera',
        gamesPlayed: 2,
        topFiveGames: ['The Legend of Zelda: Breath of the Wild', 'Doom']
      },
      {
        id: '6',
        userName: 'pannikin',
        firstName: 'Jason',
        lastName: 'Brooks',
        gamesPlayed: 38,
        topFiveGames: ['Stardew Valley', 'Minecraft', 'Read Dead Redemption 2']
      },
      {
        id: '7',
        userName: 'gillie',
        firstName: 'Julie',
        lastName: 'Henderson',
        gamesPlayed: 17,
        topFiveGames: ['Grand Theft Auto', 'Diablo III', 'Metal Gear Solid', 'Skyrim', 'Call of Duty']
      },
      {
        id: '8',
        userName: 'stampCrab',
        firstName: 'Paul',
        lastName: 'Jenkins',
        gamesPlayed: 43,
        topFiveGames: ['Mega Man 2', 'The Legend of Zelda: Breath of the Wild', 'Stardew Valley', 'Secret of Mana']
      },
      {
        id: '9',
        userName: 'tardyGrovel',
        firstName: 'Miguel',
        lastName: 'Reyes',
        gamesPlayed: 127,
        topFiveGames: ['Super Mario Odyssey', 'God of War', 'Uncharted 2', 'Super Mario World 2', 'Mario Kart 8']
      },
      {
        id: '10',
        userName: 'pumpkin',
        firstName: 'Richard',
        lastName: 'Daniel',
        gamesPlayed: 8,
        topFiveGames: ['The Last of Us', 'E.T. The Extra-Terrestrial', 'Doom', 'The Legend of Zelda: Twighlight Princess', 'Super Mario Odyssey']
      },
    ]
  };
  
  createUser = user => {
    user.gamesPlayed = 0;
    this.setState(currentState => ({
      users: [...currentState.users, user],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<CreateUser users={this.state.users} onCreateUser={this.createUser} />
		<UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
