import logo from './logo.svg';
import './App.css';
import C01componentes from './component/C01componentes';
import C02contador from './component/C02contador';
import C03contador2 from './component/C03contador2';
import C04variable from './component/C04variable';
import C05operadorTernario from './component/C05operadorTernario';
import C06matriz from './component/C06matriz';

function App() {
  return (
    <div>
      <h1>Componentes 1</h1>
      <C01componentes></C01componentes>
      
      <h1>Componentes 2</h1>
      <C02contador></C02contador>

      <h1>Componentes 3</h1>
      <C03contador2></C03contador2>

      <h1>Componentes 4</h1>
      <C04variable></C04variable>

      <h1>Componentes 5</h1>
      <C05operadorTernario></C05operadorTernario>
      
      <h1>Componentes 6</h1>
      <C06matriz></C06matriz>
    </div>
    
  );
}

export default App;
