import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTodo = (tarefaTextChildren) => {
    setTarefas([...tarefas, tarefaTextChildren])
  };

  return (
    <section className="todolist">
      <h2 className="todo-title">Minha Lista de Tarefas</h2>
      <TodoForm onAdd={addTodo} />
      <ol className="todos">
        {tarefas.map((tarefa, index) => (
          <TodoItem tarefa={tarefa} key={index} />
        ))}
      </ol>
    </section>
  );
};

export default TodoList;
