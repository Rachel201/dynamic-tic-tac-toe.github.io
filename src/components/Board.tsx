import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart, winnerInGame } from "../redux/actions/gameAction";
import { checkDynamicBoard } from "../utils/checkBoard";
import { SizeBoardInput } from "./size-board-input/SizeBoardInput";
import "./Board.css";



const Board = () => {
    const {sizeBoard} = useSelector(({game}:any)=>game)
    const {newGame} = useSelector(({game}:any)=>game)
    const dispatch = useDispatch()
    const [board,setBoard]=useState([])
    const [player,setPlayer]=useState(1)
    const [move,setMove]=useState(0)
    const {winner}=useSelector(({game}:any)=>game)

    useEffect(()=>{
      console.log("sizeBoard in board: "+sizeBoard)
        document.body.style.setProperty("--board-size", `${Math.sqrt(sizeBoard)}`);
        /*@ts-ignore*/
        setBoard([...Array(sizeBoard).fill(null)])
    },[sizeBoard])
     
    useEffect(()=>{
      console.log("sizeBoard in board: "+newGame)
       /*@ts-ignore*/
      setBoard([...Array(sizeBoard).fill(null)]);
      setPlayer(player === 1 ? 2 : 1);
      setMove(0);
      dispatch(winnerInGame(""));
      dispatch(restart(false))
    },[newGame])
  
    useEffect(() => {
      if (checkDynamicBoard(board))
      dispatch(winnerInGame((checkDynamicBoard(board) === 1 ? "Player 1" : "Player 2")));
    }, [board]);

    const handleClick = (index: number) => {
      if (winner) return;
      
      if (move ===sizeBoard ) return;
  
      if (board[index]) return;
  
      const tempBoard = [...board];
       /*@ts-ignore*/
      tempBoard[index] = player;
      setBoard(tempBoard);
      
      setPlayer(player === 1 ? 2 : 1);
      setMove((prevState: any) => prevState + 1);
    };
  
    return (
      <div>
        {winner ? (
        <h3>The winner is {winner}</h3>
      ) : move === sizeBoard? (
        <h3>Draw</h3>
      ) : (
        <h3>Player {player} turn.</h3>
      )}
      <p>Moves{move}</p>
       <SizeBoardInput/>
       <div className="board-container">
        {board.map((cell: any, index: number) => (
          <div
            key={index}
            className="board-cell"
            onClick={() => handleClick(index)}
          >
            {board[index] === 1 ? "x" : board[index] === 2 ? "o" : null}
          </div>
          
        ))}
      </div>
      </div>
    );
  };
  
export default Board;


  