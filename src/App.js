import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }
  
  _loadData = async() => {
    const url = 'https://swapi.dev/api/people/';
    const data = await fetch(url).then(response => response.json());
    return data;
  }

  async componentDidMount() {
    const apiData = await this._loadData();
    this.setState({
      characters: apiData
    })
    console.log('Characters: ', this.state.characters)
  }

  render () {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Star Wars API - React</h1>
            <nav>
            </nav>
          </header>
        </div>
        <Switch>
          {/* Place component Here */}
        </Switch>
      </Router>
    )
  }
}

export default App;
