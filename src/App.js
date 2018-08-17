import React, { Component } from 'react';
import './App.css';
import AppNavBar from './components/layout/AppNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard';
import { Provider } from 'react-redux';
import store from './store';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={AddClient} />
                <Route exact path="/client/:id" component={ClientDetails} />
                <Route exact path="/client/edit/:id" component={EditClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;