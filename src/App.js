import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import UserList from './components/users/UserList';
import Search  from './components/search/Search';
import About from './components/about/About';
import axios from "axios";

class App extends React.Component {

  state = {
    user: []
  };

  async  componentDidMount() {
    const user = await axios.get(`https://api.github.com/users`);
    this.setState({
      user: user.data
    })
  }

  getUsers = async (event) => {
    const user = await axios.get(`https://api.github.com/users`);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar appName="Github Finder" />
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <h1 className="text-center">hello world!</h1>
                <Search />

                <div className="container">
                  <UserList user={this.state.user} />
                </div>
              </header>
            </Route>
            <Route exact path="/about" component={About}>

            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
