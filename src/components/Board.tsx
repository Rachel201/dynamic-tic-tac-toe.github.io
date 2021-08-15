import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveInBoard, winnerInGame } from "../redux/actions/gameAction";
import { checkDynamicBoard } from "../utils/checkBoard";
import { SizeBoardInput } from "./size-board-input/SizeBoardInput";
import "./Board.css";



const Board = () => {
    const {sizeBoard} = useSelector(({game}:any)=>game)
    // const {board} = useSelector(({game}:any)=>game)
    const dispatch = useDispatch()
    const [board,setBoard]=useState([])
    const [player,setPlayer]=useState(1)

    const {winner}=useSelector(({game}:any)=>game)
    const {move}=useSelector(({game}:any)=>game)
    useEffect(()=>{
      console.log("sizeBoard in board: "+sizeBoard)
        document.body.style.setProperty("--board-size", `${Math.sqrt(sizeBoard)}`);
        /*@ts-ignore*/
        setBoard([...Array(sizeBoard).fill(null)])
    },[sizeBoard])
     
  

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
      dispatch(moveInBoard((prevState:any) => prevState + 1));
    };
  
    return (
      <div>
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


  