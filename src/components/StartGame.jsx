import { useContext } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { GameContext } from '../App';

const StartScreen = styled.div`
        position: absolute;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
    `;

export default function StartGame() {

    const { start } = useContext(GameContext);
    const [startValue, setStartValue] = start;

    return (
        <StartScreen>
            <Button onClick={() => setStartValue(!startValue)} btnText={"Start game"} />
        </StartScreen>
    );
}
