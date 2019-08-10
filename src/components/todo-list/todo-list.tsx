import React, { Component } from 'react';
import './todo-list.css';
import TodoItem from '../todo-item';
import { connect } from 'react-redux';
import { Istate } from '../../reducers';
import { deleteTodo } from '../../actions';

export interface ITodo {
	title: string;
	status: boolean;
	id: number;
	date: string;
}

class TodoList extends Component<any, any> {
	render() {
		const { todoList, deleteTodo } = this.props;

		return (
			<ul>
				{todoList.map((todo: ITodo) => (
					<li onClick={() => deleteTodo(todo.id)} key={todo.id}>
						<TodoItem todo={todo} />
					</li>
				))}
			</ul>
		);
	}
}

const mapStateToProps = (state: Istate) => {
	return { todoList: state.todoList };
};

const mapDispatchToProps = {
	deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
