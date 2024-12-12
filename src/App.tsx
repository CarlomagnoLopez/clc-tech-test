import './App.css';
import MatchGame from './components/MatchGame';

const data = {
  "Peru": "Lima",
  "Colombia": "Bogota",
  "Ecuador": "Quito",
  "Chile": "Santiago"
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
