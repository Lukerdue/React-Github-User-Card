import React from 'react';

class Card extends React.Component {

    handleClick =(e)=>{
        e.preventDefault();
        this.props.handleHidden(e);
    }

  render() {
    return (
      <div className="userCard">
        <div className="infoWrapper">
          <img src={this.props.user.avatar_url} />
          <div className="info">
            <h3>{this.props.user.login}</h3>
            <p>{this.props.user.name}</p>
            <p>{this.props.user.location}</p>
            <p>{this.props.user.bio}</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.handleClick} value="followers">⇃ {this.props.user.followers} followers ⇂</button>
          <button onClick={this.handleClick} value="grid">⇃ Github Usage ⇂</button>
        </div>
      </div>
    );
  }
}
export default Card;