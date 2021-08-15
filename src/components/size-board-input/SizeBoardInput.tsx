import { FormControl, MenuItem, Select } from "@material-ui/core"
import { Console } from "console";
import { useEffect, useRef, useState} from "react"
import { useDispatch} from "react-redux";
import {declareSizeBoard, restart} from "../../redux/actions/gameAction";

interface IsizeBoard{
    text:string,
    value:number,
}

export const sizeBoardList:IsizeBoard[]=[
    {
        text:'3X3',
        value:9,
    },{
        text:'4x4',
        value:16
    },{
        text:'5X5',
        value:25,
    },{
        text:'6X6',
        value:36,
    },{
        text:'7X7',
        value:49,
    },{
        text:'8X8',
        value:64,
    },{
        text:'9X9',
        value:81
    }
   
]
export const SizeBoardInput = () =>{
    const dispatch = useDispatch()

    const [sizeBoard,setSizeBoard]=useState(9);

    useEffect(()=>{
    //   console.log("sizeBoard in input: "+sizeBoard);
      dispatch(declareSizeBoard(sizeBoard));
      dispatch(restart(true));
    },[sizeBoard])

    return(
        <FormControl>
        <Select className="InputForOperation"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e:any)=>setSizeBoard(e.target.value)}
            label="Model"
        >
            {sizeBoardList.map(sizeBoard=>{
                return <MenuItem value={sizeBoard.value}>
                    <em>{sizeBoard.text}</em>
                </MenuItem>
            })
            }
        </Select>
    </FormControl>
    )
}