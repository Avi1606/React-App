import {useState} from "react";
import "./Lottery.css"

export default function Lottery() {
    let [tickets, setTickets] = useState([0, 0, 0]);

    return (
        <div className="lottery-container">
            <h1>Lottery Tickets</h1>
            <div className="ticket">
                <span>{tickets[0]}</span>
                <span>{tickets[1]}</span>
                <span>{tickets[2]}</span>
            </div>
        </div>
    );
};
