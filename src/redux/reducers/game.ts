import { BOARD_SIZE, MOVE, PLAYER, WINNER } from "../actions/actionTypes"


const initialState={
    sizeBoard:9,
    board:[...Array(9).fill(null)],
    player:1,
    winner:'',
    move:0,
    moveLimit:9
}

export default (state =initialState , action:any)=>{
   switch(action.type){
      case BOARD_SIZE:
       return {
           ...state,
           sizeBoard:action.size,
        //    board:[...Array(action.size).fill(null)],
        //    moveLimit:action.size,
          
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

