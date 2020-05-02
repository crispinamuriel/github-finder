import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.setState({search: e.target.value});
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="text-center">
        <form>
          <input type="text"
            value={this.state.search}
            onChange={this.handleChange}
           />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
