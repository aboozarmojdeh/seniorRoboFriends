import React, {Component, Fragment} from 'react';
import 'tachyons';
import './App.css';
import CardList from './components/Card/CardList';
import SearchBox from './SearchBox/SearchBox';
import {robots} from './robots';

class App extends Component {
  render(){
    return (
      <Fragment>
      
        <h1>Senior Robo Friends</h1>
        <SearchBox />
       <CardList robots={robots} />
       
    
      </Fragment>
    );
  }
 
}

export default App;
