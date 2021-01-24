
import './App.css';
import Summary from './components/Summary'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Summary/>
        <Projects name="Proscout" description="A networking platform for MMA athetes to find training partners and connect with coaches for their fights"/>
        
      </header>
    </div>
  );
}

export default App;
