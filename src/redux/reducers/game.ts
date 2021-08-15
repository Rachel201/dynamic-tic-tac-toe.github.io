import { BOARD_SIZE, CLEAR_BOARD, MOVE, PLAYER, RESTART, SUM_WINNER, WINNER } from "../actions/actionTypes"


const initialState={
    sizeBoard:9,
    newGame:false,
    clearBoard:false,
    draw:0,
    shapeX:0,
    shapeO:0,

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
        case CLEAR_BOARD:
            return{
                ...state,
                clearBoard:action.clearBoard,
            }     
        case WINNER:{
            return {
                ...state,
                winner:action.winner,
            }
        } 
        case SUM_WINNER:
            console.log("action.name: "+action.value.name);
            console.log("action.name: "+action.value.count);
         return{
             ...state,
             [action.name]:action.value
         }
        default:
          return{ ...state}  
   }
}

