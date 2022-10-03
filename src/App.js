import './App.css';
import Cards from './components/Cards';
import StartGame from './components/StartGame';
import { createContext, useState } from 'react';

function App() {

	const [gameStarted, setGameStarted] = useState(false);

	const contextValues = {
		start: [gameStarted, setGameStarted],
	}

	return (
		<GameContext.Provider value={contextValues}>
			<div className="App">
				{!gameStarted &&
					<StartGame />
				}
				{gameStarted &&
					<Cards />
				}
			</div>
		</GameContext.Provider>
	);
}

export default App;
export const GameContext = createContext();
