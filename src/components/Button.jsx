import styled from 'styled-components';

const Btn = styled.button`
        background: white;
        color: black;
        border-radius: 3px;
        border: 5px solid black;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        font-size: 2em;
        font-weight: bold;

        &:hover {
            background: black;
            color: white;
            cursor: pointer;
        }
    `;

export default function Button( {onClick, btnText} ) {
    return (
        <Btn onClick={onClick}>{btnText}</Btn>
    );
}
