import React, { Component } from 'react'

export default class UserCard extends Component {
  render() {

    const { user } = this.props;

    return (
      <div>
        <span>{user.login}</span>
        <div>
          <img width="100px" src={user.avatar_url} />
        </div>
      </div>
    );
  }
}
