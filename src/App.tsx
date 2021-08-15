import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useDispatch, useSelector } from 'react-redux';
import { restart } from './redux/actions/gameAction';



function App() {
  const {winner}=useSelector(({game}:any)=>game)
  const {move}=useSelector(({game}:any)=>game)
  const {sizeBoard} = useSelector(({game}:any)=>game)
  const dispatch = useDispatch()
  
  const handleRestart=()=>{
    dispatch(restart());
  }
  console.log('move: '+move)
  return (
    <div className="App">
    {winner ? (
        <h3>The winner is {winner}</h3>
      ) : move ===  sizeBoard? (
        <h3>Draw</h3>
      ) : (
        <h3>Player  turn.</h3>
      )}
      <p>Moves: {move}</p>
      <button onClick={handleRestart}>Restart</button>
     <Board/>
     
    </div>

  );
}

export default App;
