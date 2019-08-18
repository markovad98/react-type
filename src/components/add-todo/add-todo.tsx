import React, { Component } from 'react';
import './add-todo.css';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import { Input } from 'antd';
import { Istate } from '../../reducers';

class AddTodo extends Component<any, any> {
	state = {
		inputText: ''
	};

	onInput = (e: any) => {
		this.setState({ inputText: e.target.value });
	};

	addTodoInputFunc = (e: any) => {
		if (e.key === 'Enter') {
			this.state.inputText
				? this.props.addTodo(this.state.inputText) && this.setState({ inputText: '' })
				: alert('хiй!');
		}
	};

	addTodoBtnFunc = (e: any) => {
		this.state.inputText
			? this.props.addTodo(this.state.inputText) && this.setState({ inputText: '' })
			: alert('хiй!');
	};

	render() {
		const { darkTheme } = this.props;
		return (
			<section className="add-todo">
				<Input
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
