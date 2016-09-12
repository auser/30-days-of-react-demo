import React from 'react';

import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Index from './Index';

import Home from '../views/Home/Home';
import About from '../views/About/About';
import Login from '../views/Auth/Login';
import Logout from '../views/Auth/Logout';

export class App extends React.Component {
  static childContextTypes = {
    location: React.PropTypes.object
  }

  getChildContext() {
    return {
      location: this.props.location
    }
  }


  render() {
    const createElement = (Component, props) => {
      return <Component {...props} actions={this.props.actions} />
    }
    return (
      <Router
        history={hashHistory}
        createElement={createElement}>
          <Route path="/" component={Index}>
            <IndexRoute component={Home} />
            <Route path="home" component={Home} />
            <Route path="about" component={About} />

            <Route path="login" component={Login} />
            <Route path="logout" component={Logout} />
          </Route>
      </Router>
    )
  }
}

export default App;
