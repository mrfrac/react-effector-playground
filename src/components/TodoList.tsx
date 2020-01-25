import React from 'react';
import { ITodoItem } from '../models/ITodoItem';
import { TodoItem } from './TodoItem';

interface ITodoListProps {
  items: ITodoItem[];
}

export class TodoList extends React.Component<ITodoListProps> {
  public render(): JSX.Element {
    return (
      <ul>
        {this.props.items.map(item => <TodoItem key={item.text} item={item}/>)}
      </ul>
    );
  }
}