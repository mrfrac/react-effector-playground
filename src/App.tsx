import React from 'react';
import { TodoList } from './components/TodoList';
import { useStore } from 'effector-react';
import { todoStore, addTodo } from './store';

const App: React.FC = () => {
  const items = useStore(todoStore);
  const addButtonClickHandler = () => {
    const text = (document.getElementById("val") as HTMLInputElement)?.value;

    if (text && !items.find(item => item.text === text)) {
      addTodo({
        text,
        completed: false
      });
    }
  };
  return (
    <>
      <h1>Todo List</h1>
      <TodoList items={items} />
      <input type="text" id="val"/><button onClick={addButtonClickHandler}>Add Todo</button>
    </>
  );
}

export default App;
