import React from 'react';
import { TodoList } from './components/TodoList';
import { todoStore, addTodo } from './store';
import { inject, Injected } from 'effector-react-inject';

const stores = { todoStore };

type AppPropsType = Injected<typeof stores>;

/**
 * addTodo не работает - store не меняется
 * Разобраться!
 */

@inject({ todoStore })
export default class App extends React.Component<AppPropsType> {
  public constructor(props: AppPropsType) {
    super(props);

    this.addButtonClickHandler = this.addButtonClickHandler.bind(this);
  }

  public addButtonClickHandler() {
    const text = (document.getElementById("val") as HTMLInputElement)?.value;
    const items = this.props.todoStore || [];

    if (text && !items.find(item => item.text === text)) {
      addTodo({
        text,
        completed: false
      });
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <h1>Todo List</h1>
        <TodoList items={this.props.todoStore || []} />
        <input type="text" id="val"/><button onClick={this.addButtonClickHandler}>Add Todo</button>
      </>
    );
  }

}
