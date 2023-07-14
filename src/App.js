import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (title, date) => {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      date,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const completedTask = tasks.find((task) => task.id === id);
    completedTask.completed = true;
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="container">
        <div>
          <h2>Pending Tasks</h2>
          <TodoForm addTask={addTask} />
          <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
        </div>
        <div>
          <h2>Completed Tasks</h2>
          <TodoList tasks={completedTasks} completeTask={completeTask} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default App;
