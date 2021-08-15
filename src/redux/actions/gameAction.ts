import { AppDispatch } from "../store";
import { BOARD_SIZE, MOVE, PLAYER, RESTART, WINNER } from "./actionTypes";


//The function declare the this the board :3x3 or 4x4 ...
export const declareSizeBoard = (size:any)=>(dispatch:AppDispatch)=>{
    dispatch({
        type:BOARD_SIZE,
        size,
    })
}

export const winnerInGame=(winner:string)=>(dispatch:AppDispatch)=>{
    dispatch({
        type: WINNER,
        winner,
    })
}
export const restart=(newGame:boolean)=>(dispatch:AppDispatch)=>{
    dispatch({
        type:RESTART,
        newGame,
    })
}


