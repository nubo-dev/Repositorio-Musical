import React, { Component } from 'react';

// Components
import Header from './Global/Head/'
import Content from './Global/Content/'

// Data
import items from './Rutes/'

class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header title='Mi Repertorio Discográfico' items={items} />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
