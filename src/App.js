import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Mycss.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
// import Image from 'react-bootstrap/Image';
// import Myheader, { NewComp } from './Header';
import Users from './users/Users';
import NavBar from './components/layout/NavBar';
import Search from './users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './users/User';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };
  // USING .then syntax

  // componentDidMount() {
  //   axios
  //     .get('https://api.github.com/users')
  //     .then(res => console.log(res.data));
  // }

  // Asynch Await
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ users: res.data, loading: false });
  }

  // Search User
  searchUser = async text => {
    // console.log({ text });
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };

  // Get Single User
  getUser = async username => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res);
    this.setState({ user: res.data, loading: false });
  };

  //Clear User
  clearUser = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    // const name = 'Expression for String Constant';
    // const innermethod = () => 'Inner Method';
    const { users, user, alert, loading } = this.state;
    return (
      <Router>
        {/* <Image className='w-25 p-3' src={logo} /> */}

        {/* {this.myclassmethod()}
        {name} | {innermethod()} */}
        {/* <h1>Content of App Component</h1>
        <hr></hr>
        <Myheader />
        <hr></hr>
        <NewComp />
        <hr></hr>
        <Myapp />
        <hr></hr>
        <Newapp />
        <hr></hr> */}
        <NavBar />
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Fragment>
                <Search
                  userSearch={this.searchUser}
                  clearUser={this.clearUser}
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />
                <Users loading={loading} users={users} />
              </Fragment>
            )}
          />
          <Route exact path='/about' component={About} />
          <Route
            exact
            path='/user/:login'
            render={props => (
              <User
                {...props}
                getUser={this.getUser}
                user={user}
                loading={loading}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

// function Myapp() {
//   return <h1>function Component</h1>;
// }
// class Newapp extends Component {
//   render() {
//     return <h1>Class Component</h1>;
//   }
// }

export default App;
