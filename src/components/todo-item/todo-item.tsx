import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions';
import './todo-item.css';

class TodoItem extends Component<any, any> {
	state = {
		todoItemOpacity: 1,
		isDeleted: false
	};

	public transparentItem() {
		this.setState({ isDeleted: true });
	}

	render() {
		const { todo: { title, id } } = this.props;

		return (
			<div style={{ opacity: this.state.isDeleted ? 0 : 1 }} className="todo-item">
				<span>{title}</span>

				<button
					onClick={() => {
						this.props.deleteTodo(id);
						this.transparentItem();
					}}
					className="todo-item__btn"
				>
					Delete task{id}
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { todoList: state.todoList };
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		deleteTodo: (id: number) =>
			setTimeout(() => {
				dispatch(deleteTodo(id));
			}, 500)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
