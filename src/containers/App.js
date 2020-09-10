import React, { Component, Fragment } from "react";
import "tachyons";
import "./App.css";
import CardList from "../components/Card/CardList";
import SearchBox from "../components/SearchBox/SearchBox";
import Scroll from "../components/Scroll/Scroll";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  //////////////async AXIOS Call ///////////////////////////
  getUser = async (event) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = response.data;
      this.setState({ robots: users });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getUser();
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    if (!this.state.robots.length) {
      return <h1 className="f1 app-header-text">Loading!</h1>;
    } else {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1 app-header-text">Senior Robo Friends</h1>
            <SearchBox onSearchChange={this.onSearchChange} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

export default App;
