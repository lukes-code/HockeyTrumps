import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../../players.json';
import CardContainer from '../CardContainer';


export default function Card() {
    const [cpuHand, setCpuHand] = useState([]);
    const [playerHand, setPlayerHand] = useState([]);

    useEffect(() => {
        const twoHands = data.players.sort(() => .5 - Math.random()).slice(0,12);
        const middleIndex = Math.ceil(twoHands.length / 2);
        setCpuHand(twoHands.splice(0, middleIndex));
        setPlayerHand(twoHands.splice(-middleIndex));
    }, []);

    const cpuCards = cpuHand.map((card) =>
        <CardContainer cardDetails={card} key={uuidv4()} />
    );

    const playerCards = playerHand.map((card) =>
        <CardContainer cardDetails={card} key={uuidv4()} />
    );

    return (
        <div className="card">
            <div>
                <p><b>CPU Cards</b></p>
                {cpuCards}
            </div>
            <div>
                <p><b>Player Cards</b></p>
                {playerCards}
            </div>
        </div>
    );
} 