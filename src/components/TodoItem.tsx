import React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { toggleTodo } from '../store';

interface ITodoItemProps {
  item: ITodoItem;
  index: number;
}

export class TodoItem extends React.Component<ITodoItemProps> {
  public getStatusLabel(): JSX.Element {
    if (this.props.item.completed) {
      return <strong>done</strong>;
    }

    return <i>new</i>;
  }

  public toggleButtonClickHandler(index: number) {
    toggleTodo(index);
  }

  public render(): JSX.Element {
    return (
    <li>{this.props.item.text} <small>{this.getStatusLabel()}</small> <button onClick={() => this.toggleButtonClickHandler(this.props.index)}>Toggle</button></li>
    );
  }
}