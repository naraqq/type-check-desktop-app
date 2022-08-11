import './App.css';
import Game from './componets/game';
import data from "./data/sentences.json"

function App() {
  return (
    <div>
      <Game data={data} />
    </div>
  );
}

export default App;
