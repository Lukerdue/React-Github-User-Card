import React from 'react';

class Card extends React.Component {
  render() {
    return(
        <div className="userCard">
            <h3>{this.props.user.login}</h3>
        </div>
    )
  }
}
export default Card;