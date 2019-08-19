import React, { Component } from 'react';
import './add-todo.css';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { Istate } from '../../reducers';

class AddTodo extends Component<any, any> {
	state = {
		inputText: '',
		hasAddTodoError: false
	};

	onInput = (e: any) => {
		this.setState({ inputText: e.target.value, hasAddTodoError: false });
	};

	addTodoInputFunc = (e: any) => {
		if (e.key === 'Enter') {
			this.state.inputText
				? this.props.addTodo(this.state.inputText) && this.setState({ inputText: '' })
				: this.setState({ hasAddTodoError: true });
		}
	};

	addTodoBtnFunc = (e: any) => {
		this.state.inputText
			? this.props.addTodo(this.state.inputText) && this.setState({ inputText: '' })
			: this.setState({ hasAddTodoError: true });
	};

	render() {
		const { darkTheme } = this.props;
		return (
			<section className="add-todo">
				<input
					style={{ boxShadow: darkTheme ? ' 0px 0px 8px 2px #ff99ff' : ' 3px 3px 8px 2px lightgray' }}
					className="add-todo-input"
					placeholder="Title of todo"
					type="text"
					value={this.state.inputText}
					onChange={this.onInput}
					onKeyPress={this.addTodoInputFunc}
				/>
				<button
					onClick={this.addTodoBtnFunc}
					style={{
						background: darkTheme
							? 'linear-gradient(45deg, #7b47ff, #ff47a9)'
							: 'linear-gradient(45deg, #1affb3, #0f9bff)'
					}}
					className="add-todo-btn"
				>
					Add task
				</button>
				<span
					style={{
						zIndex: this.state.hasAddTodoError ? 1 : -1,
						top: this.state.hasAddTodoError ? '50px' : '25px',
						color: darkTheme ? '#d86bff' : 'tomato'
					}}
					className="add-todo-error"
				>
					You cannot enter an empty field
				</span>
			</section>
		);
	}
}

const mapStateToProps = (state: Istate) => {
	return {
		darkTheme: state.darkTheme
	};
};

const mapDispatchToProps = {
	addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
