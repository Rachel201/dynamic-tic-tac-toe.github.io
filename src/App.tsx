import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useDispatch, useSelector } from 'react-redux';
import { restart } from './redux/actions/gameAction';



function App() {
  const dispatch = useDispatch()
  
  const handleRestart=()=>{
    dispatch(restart(true));
  }
  return (
    <div className="App">
      <button onClick={handleRestart}>Restart</button>
     <Board/>
    </div>

  );
}

export default App;
