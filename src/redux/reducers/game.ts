import { BOARD_SIZE, MOVE, PLAYER, RESTART, WINNER } from "../actions/actionTypes"


const initialState={
    sizeBoard:9,
    board:[...Array(9).fill(null)],
    player:1,
    winner:'',
    move:0,
    moveLimit:9,
    newGame:false
}

export default (state =initialState , action:any)=>{
   switch(action.type){
      case BOARD_SIZE:
       return {
           ...state,
           sizeBoard:action.size,
        }
        case RESTART:
            return {
                ...state,
                newGame:action.newGame,
             }
        case PLAYER:
            return {
                ...state,
                player:action.player,
             }
        case MOVE:
            return {
                ...state,
                move:action.move,
             }
        case WINNER:{
            return {
                ...state,
                winner:action.winner,
            }
        } 

        default:
          return{ ...state}  
   }
}

