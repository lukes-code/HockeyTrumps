import React, { useState, useEffect } from 'react';
import data from '../../players.json';

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
        <p>{card.name}-{card.team}-{card.attributes.slapShot}-{card.attributes.wristShot}-{card.attributes.passing}-{card.attributes.fighting}-{card.attributes.defence}-{card.attributes.endurance}</p>
    );

    const playerCards = playerHand.map((card) =>
    <p>{card.name}-{card.team}-{card.attributes.slapShot}-{card.attributes.wristShot}-{card.attributes.passing}-{card.attributes.fighting}-{card.attributes.defence}-{card.attributes.endurance}</p>
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