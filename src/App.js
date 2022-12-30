import './App.css';
import ComponenteA from './components/ComponenteA';
import Clock from './components/Clock';


function App() {
  return (
    <div className="App body">
      <ComponenteA nombre = "Jose" apellido="Perez" email = "jose@asdf.com " conectado = {false}/>
      <ComponenteA nombre="Alex" apellido = "Rodrigez" email = "ArlRod@asdf.com " conectado = {true}/>
      <ComponenteA nombre = "Arturo" apellido="Sanchez" email = "ArtSan@asdf.com " conectado = {true}/>
      <ComponenteA nombre="Miguel" apellido = "Dominguez" email = "ArtSan@asdf.com " conectado = {false}/>
      <Clock></Clock>
    </div>
  );
}

export default App;
