import React from 'react';
import { Button } from './Button';
import { TaskProps } from './App';

type TodolistProps = {
  title: string;
  tasks: TaskProps[];
  isDone: boolean;
  data?: string;
};

export const Todolist = ({ title, tasks, data }: TodolistProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button title={'+'} />
      </div>
      {/* 
      <ul>
        <li>
          <input type="checkbox" checked={true} />
          <span>HTML&CSS</span>
        </li>
        <li>
          <input type="checkbox" checked={true} />
          <span>JS</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>React</span>
        </li>
      </ul>
 */}

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          );
        })}
      </ul>

      {/* 
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
              </li>
            );
          })}
        </ul> */}

      <Button title={'All'} />
      <Button title={'Active'} />
      <Button title={'Completed'} />

      <div>{data}</div>
    </div>
  );
};
