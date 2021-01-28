
import './App.css';
import Summary from './components/Summary'
import Projects from './components/projects'
import Profilepic from './components/profilepic'
import pic from './public/download.png'

function App() {
  const projectnames = ['proscout', 'bodyfeed']
  return (
    <div className="App">
      <header className="App-header">

        <Profilepic/>
        <Summary/>
        <Projects names={projectnames}/>
        
      </header>
    </div>
  );
}

export default App;
