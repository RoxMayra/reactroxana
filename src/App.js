import logo from './logo.svg';
import './App.css';
import C01componentes from './component/C01componentes';
import C02contador from './component/C02contador';
import C03contador2 from './component/C03contador2';
import C04variable from './component/C04variable';
import C05operadorTernario from './component/C05operadorTernario';
import C06matriz from './component/C06matriz';
import C07matrizOperaciones from './component/C07matrizOperaciones';


function App() {
  return (
    <div>

      <h1>Componentes 7</h1>
      <C07matrizOperaciones></C07matrizOperaciones>

      <h1>Componentes 5</h1>
      <C05operadorTernario></C05operadorTernario>

      <h1>Componentes 3</h1>
      <C03contador2></C03contador2>

      <h1>Componentes 1</h1>
      <C01componentes></C01componentes>
      
      
      
    </div>
    
  );
}

export default App;
