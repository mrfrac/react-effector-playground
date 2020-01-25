import React from 'react';
import { TodoList } from './components/TodoList';
import { ITodoItem } from './models/ITodoItem';

const items: ITodoItem[] = [{
  text: "Item #1",
  completed: false,
}, {
  text: "Item #2",
  completed: false,
}, {
  text: "Item #3",
  completed: false,
}, {
  text: "Item #4",
  completed: true,
}];

const App: React.FC = () => {
  return (
    <>
      <h1>Todo List</h1>
      <TodoList items={items} />
    </>
  );
}

export default App;
