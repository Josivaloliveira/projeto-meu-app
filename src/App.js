import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/Reverse/Reverse';
import TodoList from './components/TodoList/TodoList';


function App() {
  return (
    <div className="App">
      <Welcome nome="Josival" sobrenome="Bernardo"/>
      <div className="reverse">
        <p className="app-text">Os textos abaixo são criados pelo componente Reverse:</p>
        <Reverse> 
          meu texto
        </Reverse>
        <Reverse>
          o meu nome é Josival
        </Reverse>
      </div>
      <TodoList/>
    </div>
  );
}


export default App;
