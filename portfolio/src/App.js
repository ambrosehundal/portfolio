
import './App.css';
import Summary from './components/Summary'
import Projects from './components/projects'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Summary/>
        <Projects names={['proscout', 'bodyfeed']}/>
        
      </header>
    </div>
  );
}

export default App;
