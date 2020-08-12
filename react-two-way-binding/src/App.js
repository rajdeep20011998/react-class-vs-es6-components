import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'techsith'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <br />

        <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
        <br />
        <button onClick={() => this.changeName('Awsome Techsith :(')}>Change Using Anon Function</button>
        <br />

        <button onClick={this.changeName.bind(this, 'Awsome Techsith :)')}>Change Using Bind</button>
        <br /><br /><br />
        <div>
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default App;