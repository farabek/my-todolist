import React from 'react';
import { Todolist } from './Todolist';
import './App.css';

export type TaskProps = {
  id: number;
  title: string;
  isDone: boolean;
};

const App = () => {
  const tasks1: TaskProps[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'Typescript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ];

  const tasks2: TaskProps[] = [
    { id: 1, title: 'Hello world', isDone: true },
    { id: 2, title: 'I am Happy', isDone: false },
    { id: 3, title: 'Yo', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title={'What to learn'} tasks={tasks1} isDone={true} data="11.09.2024" />
      <Todolist title={'Songs'} tasks={tasks2} isDone={false} />
      <Todolist title={'Books'} tasks={[]} isDone={false} />
    </div>
  );
};

export default App;
