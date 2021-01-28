
import './App.css';
import Summary from './components/Summary'
import Projects from './components/projects'

function App() {
  const projectnames = ['proscout', 'bodyfeed']
  return (
    <div className="App">
      <header className="App-header">

        <Summary/>
        <Projects names={projectnames}/>
        
      </header>
    </div>
  );
}

export default App;
