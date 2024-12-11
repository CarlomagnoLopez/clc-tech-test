import './App.css';
import MatchGame from './components/MatchGame';

const data = {
  "kgermany": "vberlin",
  "kgermany1": "vberlin1",
  "kgermany2": "vberlin2"
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <MatchGame data={data}></MatchGame>
      </div>
    </div>
  );
}

export default App;
