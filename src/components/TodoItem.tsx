import React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface ITodoItemProps {
  item: ITodoItem;
}

export class TodoItem extends React.Component<ITodoItemProps> {
  public getStatusLabel(): JSX.Element {
    if (this.props.item.completed) {
      return <strong>done</strong>;
    }

    return <i>in progress</i>;
  }

  public render(): JSX.Element {
    return (
    <li>{this.props.item.text} <small>{this.getStatusLabel()}</small></li>
    );
  }
}