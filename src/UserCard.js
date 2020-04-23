import React, { Component } from 'react';

class UserCard extends Component {
  
  state = {
    showGamesPlayed: true,
    buttonText: 'Hide'
  }

  toggleShowGamesPlayed () {
    this.setState(() => ({
      showGamesPlayed: !this.state.showGamesPlayed,
      buttonText: this.state.showGamesPlayed ? 'Show' : 'Hide'
    }))
    
  }
  
  render() {
    const { user } = this.props
    return (
      <li className="user__card">
        <div>
          <p className="highlighted display--inline">{user.userName}</p>
		  <p className="divider display--inline">|</p>
          <p className="display--inline">{user.firstName} {user.lastName}</p>
		  <button onClick={() => this.toggleShowGamesPlayed()} className="btn toggle__button">{this.state.buttonText}</button>
        </div>
		{this.state.showGamesPlayed && <div>
      	  <h4 className="user__card-heading">Number of games played</h4>
          <p>{user.gamesPlayed}</p>
		 {user.topFiveGames.length > 0 &&
          <div>
 		  <h4 className="user__card-heading">Favorite Games</h4>
          <ul className="simple-list games__list">{user.topFiveGames.map((game) => (<li key={game} className="simple-list-item game__item">{game}</li>))}</ul></div>}
        </div>}
      </li>
    )
  }

}


export default UserCard