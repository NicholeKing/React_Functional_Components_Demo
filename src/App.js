import logo from './logo.svg';
import './App.css';
import Character from './components/Character';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the functional components demo!</h1>
      <Character name="Mitch" race="Orc" skill="Hunter" hp={200}/>
      <Character name="Buddy" race="Elf" skill="Mage" hp={300}/>
      <Character name="Mario" race="Gnome" skill="Plumber" hp={210}/>
      <Character name="Jason" race="Gnome" skill="Hunter" hp={280}/>
    </div>
  );
}

export default App;
