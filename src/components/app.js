import React, { Component } from 'react';
import Header from './header';
import About from './about';
import Start from './start';


import "../styles/app.css"


class App extends Component {
  render() {
    return (
      <div className="app">
            <Header />
            <Start />
//            <About />
      </div>
    );
  }
}

export default App;
