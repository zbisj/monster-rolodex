import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList'
import { SearchBox } from './components/search-box/SearchBox'

class App extends Component {
  constructor() {
    super();
    this.state ={
      monsters: [],
      searchField: ''
    }

  }

  handleChange = (e) => {
   this.setState({searchField: e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;

    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filterdMonsters }/>

      </div>
    );
  }
}

export default App;
