import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList.component";
import { SearchBox } from "./components/SearchBox/SearchBox.components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };

    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e){
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Deck</h1>
        <SearchBox
          placeholder='Search Monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
