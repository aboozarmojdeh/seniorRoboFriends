import React, { Component, Fragment } from 'react';
import 'tachyons';
import './App.css';
import CardList from './components/Card/CardList';
import SearchBox from './SearchBox/SearchBox';
import { robots } from './robots';



class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  };


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1 app-header-text">Senior Robo Friends</h1>
          <SearchBox onSearchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>

      </Fragment>
    );
  }

}

export default App;
