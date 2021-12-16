import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./Comps/Main";
import {MyAppContextProvider} from "./Comps/AppContext";
import {Alert} from "./Comps/Alert";
//import {ShoppingList, ShoppingList2} from "./ShoppingList/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
        <MyAppContextProvider>
            <Alert/>
            <Main/>
        </MyAppContextProvider>

    </div>
  );
}

export default App;
