import './App.css';
import { useState } from 'react'
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ]);

  // --- ADICIONAR NOVA TAREFA ------------------------
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };
  // --------------------------------------------------

  // --- REMOVER TAREFA -------------------------------
  const remove = (id) => {
    const newTodos = [...todos]
    const filtroTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filtroTodos);
  };
  // --------------------------------------------------

  // --- COMPLETAR TAREFA -----------------------------
  const completarTarefa = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }
  // --------------------------------------------------

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} remove={remove} completarTarefa={completarTarefa}/>
        ))}
      </div>
      <FormTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;