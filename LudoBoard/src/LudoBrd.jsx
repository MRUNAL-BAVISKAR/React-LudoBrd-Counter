import { useState } from "react";

export default function LudoBrd(){
let [moves,setmoves] = useState({blue:0, red:0, yellow:0, green:0});

let UpdateBlue = ()=>{
    setmoves((prevMoves)=>{
        return {...prevMoves,blue: prevMoves.blue+1}
    });
};
let UpdateYellow = ()=>{
    setmoves((prevMoves)=>{
        return {...prevMoves,yellow: prevMoves.yellow+1}
    });
};
let UpdateGreen = ()=>{
    setmoves((prevMoves)=>{
        return {...prevMoves,green: prevMoves.green+1}
    });
};let UpdateRed = ()=>{
    setmoves((prevMoves)=>{
        return {...prevMoves,red: prevMoves.red+1}
    });
};

    return (
        <div>
            <p>Game Begins!!</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor:"dodgerblue", color:"black"}}
                onClick={UpdateBlue}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor:"green", color:"black"}} onClick={UpdateGreen}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={UpdateYellow}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor:"red", color:"black"}} onClick={UpdateRed}>+1</button>
            </div>
        </div>
    );
}