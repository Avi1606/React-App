import {useState} from "react";
import LudoBoard from "./Ludo-Board.jsx";
import './App.css'

function App() {
    let [moves, setmoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});

    function handleMoves() {
        setmoves({...moves , blue: moves.blue+1});
    }


    return (
        <div>
            <h>Game Begin</h>

            <p>Blue Moves ={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={handleMoves}>+1</button>

            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor:"Red"}}>+1</button>

            <p>Yellow Moves ={moves.yellow}</p>
            <button style={{backgroundColor:"yellow" , color:"black"}}>+1</button>

            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>

        </div>
    );
}

export default App
