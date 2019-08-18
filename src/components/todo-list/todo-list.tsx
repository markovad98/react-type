import React, { Component } from 'react';
import './todo-list.css';
import TodoItem from '../todo-item';
import { connect } from 'react-redux';
import { Itodo } from '../../reducers';

class TodoList extends Component<any, any> {
	render() {
		const { todoListByFilter, darkTheme } = this.props;

		return (
			<ul className="todo-list">
				{todoListByFilter.length ? (
					todoListByFilter.map((todo: Itodo) => (
						<li key={todo.id}>
							<TodoItem todo={todo} />
						</li>
					))
				) : (
					<div
						style={{
							background: darkTheme
								? 'linear-gradient(45deg, #7b47ff, #ff47a9)'
								: 'linear-gradient(45deg, #1affb3, #0f9bff)'
						}}
						className="todo-list_empty"
					>
						Todo list is empty
					</div>
				)}
			</ul>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { todoListByFilter: state.todoListByFilter, darkTheme: state.darkTheme };
};

export default connect(mapStateToProps)(TodoList);
