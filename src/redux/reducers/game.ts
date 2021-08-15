import { BOARD_SIZE, MOVE, PLAYER, RESTART, WINNER } from "../actions/actionTypes"


const initialState={
    sizeBoard:9,
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

