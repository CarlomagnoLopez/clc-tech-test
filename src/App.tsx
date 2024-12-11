import './App.css';
import MatchGame from './components/MatchGame';

const data = {
  germany: "berlin",
  germany1: "berlin1",
  germany2: "berlin2"
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
