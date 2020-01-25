import { createStore, createEvent } from 'effector';
import { ITodoItem } from './models/ITodoItem';

const addTodo = createEvent<ITodoItem>("addTodo");
const toggleTodo = createEvent<number>("toggleTodo");

const initialState: ITodoItem[] = [{
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

const todoStore = createStore<typeof initialState>(initialState)
  .on(addTodo, (state: ITodoItem[], payload: ITodoItem) => {
    return [...state, payload];
  })
  .on(toggleTodo, (state: ITodoItem[], index: number) => {
    if (state[index]) {
      state[index].completed = !state[index].completed;
    }

    return [...state];
  });

export {
  todoStore,
  addTodo,
  toggleTodo,
};
