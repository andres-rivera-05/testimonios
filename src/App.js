import logo from './logo.svg';
import './App.css';

import Testimonio from './components/Testimonio';
function App() {
  return (
    <>
      <div className='App'>
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen los estudiantes de Ceutec</h1>
          <Testimonio />
        </div>
      </div>
    </>
  );
}

export default App;
