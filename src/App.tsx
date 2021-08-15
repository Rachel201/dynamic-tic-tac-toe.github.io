import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}> 
    <div className="App">
     <Board/>
    </div>
    </Provider>
  );
}

export default App;
