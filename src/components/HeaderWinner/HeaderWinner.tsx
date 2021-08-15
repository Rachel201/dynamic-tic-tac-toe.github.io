import { useSelector } from "react-redux"
import './HeaderWinner.css'

export const HeaderWinner =()=>{
    const {squreO}=useSelector(({game}:any)=>game)
    const {squreX}=useSelector(({game}:any)=>game)
    const {drow}=useSelector(({game}:any)=>game)

    return(
        <>
       <p>o</p> 
       <p>x</p>
       <p>Drow</p>
       <p>{squreO}</p> 
       <p>{squreX}</p>
       <p>{drow}</p>
       
    </>
    )
}