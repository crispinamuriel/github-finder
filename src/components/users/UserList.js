import React, { Component } from 'react';
import UserCard from './UserCard';


export default class UserList extends Component {



  render() {
    console.log(this.props.user)
    return (
      <div className="row">
        <div>
           <h2>User List:</h2>
        </div>



        <div>
          {this.props.user.map((e, index) => (
            <div key={index}>
              <UserCard user={e} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
