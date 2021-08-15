import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/board/Board';
import { useDispatch, useSelector } from 'react-redux';
import { newBoard, restart } from './redux/actions/gameAction';
import { HeaderWinner } from './components/HeaderWinner/HeaderWinner';



function App() {
  const dispatch = useDispatch()
  
  const handleRestart=()=>{
    dispatch(restart(true));
  }
  const handleClearBoard=()=>{
    dispatch(newBoard(true));
  }
  return (
    <div className="App">
      {/* <HeaderWinner/> */}
      <button onClick={handleRestart}>Restart</button>
      {/* <button onClick={handleClearBoard}>clear board</button> */}
       <Board/>
    </div>

  );
}

export default App;
