
import React from "react"
import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola Maribel"/> 
          <hr/> 
          <Propiedades
          cadena="Esto es una cadena de texto" 
          numero={19}
          booleano={true}
          arreglo={[1,2,3]}   
          objeto={{nombre:"Alejo", correo:"acuellarh@gmail.com"}}  
          funcion={ num => num*num }
          elementoReact={<i>Esto es un elemento React</i>}   
          componenteReact={<Componente msg="Soy un componente pasado como Prop"/>}  
          />  
        </section>
      </header>
    </div>
  );
}

export default App;
