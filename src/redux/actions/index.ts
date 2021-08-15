import { BOARD_SIZE } from "./actionTypes"


export const BoardSize=(size:number)=>(dispatch:any)=>{
    dispatch({
      type:BOARD_SIZE,
      size,
    }
    )
    
}