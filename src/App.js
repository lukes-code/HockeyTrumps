import './App.css';
import CardContainer from './components/CardContainer';
import data from './players.json';

function App() {
  const cpuCards = [...data.players];
  cpuCards.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const playerCards = cpuCards.splice(0, Math.floor(cpuCards.length / 2));
  while (playerCards.length < cpuCards.length) {
    cpuCards.pop();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hockey Trumps</h1>
        <span>
          First Card Player: {playerCards[0].name} | Cardpool Size:{' '}
          {playerCards.length}
        </span>
        <span>
          First Card CPU: {cpuCards[0].name} | Cardpool Size: {cpuCards.length}
        </span>
        <CardContainer />
      </header>
    </div>
  );
}

export default App;
